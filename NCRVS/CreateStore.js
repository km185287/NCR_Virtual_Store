import React, {useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,Image, SafeAreaView, ScrollView} from 'react-native';
import {Input} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-crop-picker';

//icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

function CreateStore({navigation}) {

    const [storename,setStoreName] = useState('');
    const [storeno,setStoreNo] = useState(0);
    const [businessmail,setBusinessMail] = useState('');
    const [address,setAddress] = useState('');
    const [cameraImages,setCameraImages]=useState([]);
    const [image1,setImages] = useState([]);
    const [tempy,setTemp] = useState([]);

    const formCameraImages = () => {

        const result = [];
        for(let i=0;i<cameraImages.length;i++) {
            result.push(<Image source={{uri:cameraImages[i]}} key={i} style={{height:200,width:wp(100),resizeMode:'contain'}} />);
        }
        setTemp(result);
        console.log("result",result);
        //navigation.navigate('DupCreateStore',{Images:result});
    };

    const uploadPicsfromGallery = () => {

        ImagePicker.openPicker({
            multiple:true,
            height:300,
            width:300
            }).then(images => {
                const imagetemp = cameraImages;
                console.log(typeof(cameraImages));
                for(let i=0;i<images.length;i++)
                {
                    imagetemp.push(images[i].path);
                }
                setCameraImages(imagetemp);
                formCameraImages();
            });
    };

    const takePhotoFromCamera = () => {

        ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
        }).then(image => {
            const imagetemp = cameraImages;
            imagetemp.push(image.path);
            setCameraImages(imagetemp);
            formCameraImages();
        });
    };

    useEffect(() => {
        const event = navigation.addListener('focus', () => {
            // do something
            console.log("addMoneyToWallet screen in focus");
            //fetchData();
            console.log("printing:",tempy);
        });
        return event;
    },[cameraImages]);  

    return (
        <View style={{flex:1}}>
            <View style={{height:hp(30),width:wp(100),backgroundColor:'grey',alignItems:'center',justifyContent:'center'}}>
                {
                    cameraImages == '' ? (

                        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} onPress={()=>uploadPicsfromGallery()}>
                            <Feather name="plus-square" size={hp(6)} color="white"/>
                            <Text style={{color:'white',fontSize:hp(3)}}>Upload Images</Text>
                        </TouchableOpacity>
                        
                    ) :
                    (
                        console.log(cameraImages)
                    )
                }
            </View>
            <SafeAreaView>
                <ScrollView style={{height:hp(70)}}>

                    <Input
                        placeholder="Store Name"
                        //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                        style={{marginTop:hp(3),fontSize:hp(2.3)}}
                        onChangeText={value => setStoreName(value)}
                    />
                    <Input
                        placeholder="Store Contact No"
                        //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                        style={{marginTop:hp(-4),fontSize:hp(2.3)}}
                        onChangeText={value => setStoreNo(value)}
                    />
                    <Input
                        placeholder="Business Mail (Optional)"
                        //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                        style={{marginTop:hp(-4),fontSize:hp(2.3)}}
                        onChangeText={value => setBusinessMail(value)}
                    />
                    <Input
                        placeholder="Address"
                        //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                        style={{marginTop:hp(-4),fontSize:hp(2.3)}}
                        onChangeText={value => setAddress(value)}
                    />
                    <TouchableOpacity style={{marginTop:hp(28),width:wp(100),height:hp(7),alignItems:'center',justifyContent:'center',backgroundColor:'black'}} onPress={()=> navigation.navigate('ManageStoreStack')}>
                        <Text style={{color:'white'}}>Next</Text>
                    </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
export default CreateStore;