import React, {useState,useEffect} from 'react';
import {View,Text,Button,Image,Dimensions,TouchableOpacity,FlatList,SafeAreaView,StyleSheet,TouchableWithoutFeedback,Alert} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-crop-picker';


import AsyncStorage from '@react-native-async-storage/async-storage';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// signOut = async({navigation}) => {
    
//     console.log('hello from signout');
//     try {
//         const mobile = await AsyncStorage.getItem('mobileNo');   
//         fetch('http://192.168.43.216:80/tgkp/logout.php', {
//               method: 'POST',
//               headers: {
//                   'Accept': 'application/json',
//                   'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({
//                   mobileNo : mobile
//               })
              
//           }).
//           then((response) => response.text())
//           .then((responseJson) => {   
//               console.log(responseJson);
//               if(responseJson == '"logged out"') {
//                     console.log('final navigation');
//                     navigation.navigate('SignIn');
//               }
          
//           }).catch((error) => {
//                   console.log('cannot log you out from customer Drawer');
//                   console.error(error);
//           });

//     }catch(err) {
//         console.log(err);
//     }

// }

const AccountScreen = ({navigation,props}) =>
{
    const width=Dimensions.get('window').width;
    const height=Dimensions.get('window').height;

    const [image,setImage] = useState('');
    const [name,setName]= useState('');
    const [call,setCall]=useState(0);
    const [email,setEmail]=useState('');

    const [location,setLocation] = useState('');
    
    const account_icon=(<FontAwesome5 name="address-card" size={hp(3.36)} color="#696969"/>);
    const order_icon=(<FontAwesome5 name="history" size={hp(3.36)} color="#696969"/>); 
    const cart_icon=(<AntDesign name="shoppingcart" size={hp(3.36)} color="#696969" />);
    const wallet_icon=(<Fontisto name="wallet" size={hp(3.36)} color="#696969" />);
    const logout_icon=(<Ionicons name="md-exit" size={hp(3.36)} color="#696969" />);

    const getPageDetails = async() => {
        
        const phone = await AsyncStorage.getItem('MobileNo');
        console.log(phone);

        try {
            const mobile = parseInt(await AsyncStorage.getItem("MobileNo"));
            const name = await AsyncStorage.getItem("UserName");

            const encodedValue = await encodeURIComponent(mobile);
            
            console.log("Phone is:",mobile);
            await fetch(`http://192.168.1.100:3000/getProfilePic?MobileNo=${encodedValue}`, {
                method:'GET',
            }).then(res => res.json())
            .then(data => {
                console.log("data is :",data[0]);
                console.log("username is:",data[0].userImage);
                setImage(data[0].userImage);
                setName(data[0].userName);
                setCall(data[0].MobileNo);
                setEmail(data[0].emailID);
            })
        }catch(e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const event = navigation.addListener('focus', () => {
           // do something
           console.log("Account screen in focus");
           getPageDetails();
        });
        return event;
    },[navigation]);

    const updateImageUrl = async(url) => {
        
        try {
            var phone = parseInt(await AsyncStorage.getItem("MobileNo"));
            phone = encodeURIComponent(phone);

            console.log(phone);
            await fetch(`http://192.168.1.100:3000/updateProfilePic/MobileNo=${phone}`,{
                    method:'PUT',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        MobileNo : phone,
                        userImage: url
                    })
            }).then(res => res.json())
            .then(data => {
                console.log(data);
            }).catch(err => {
                console.log("error",err);
            })
        }catch(e){
            console.log(e);
        }
    };
    const renderSeparator = () => {  
        return (  
            <View  
                style={{  
                    height: hp(0.14),  
                    width: wp(100), 
                    backgroundColor: "#a9a9a9",  
                }}  
            />  
        );  
    };

    const actiononRow = (item) =>
    {
        <View>
           <Text>Hello world</Text>
           Alert.alert('khaja hii');
        </View>
    }

    const updateStatus = async() => {

        try {
              const mobile = parseInt(await AsyncStorage.getItem("MobileNo"));
              const encodedValue = encodeURIComponent(mobile);
              console.log(encodedValue);
              
           fetch(`http://192.168.1.100:3000/updateUserStatusToInactive/${encodedValue}`,{
              method:'PUT',
              headers:{
                  'Accept':'application/json',
                  'Content-Type':'application/json'
              },
              body:JSON.stringify({ 
                   MobileNo:mobile,
              })
              }).then(res => res.json())
              .then(async (data) => {
                  console.log(data);
                  await AsyncStorage.setItem("UserLoginStatus","LoggedOff");
                  navigation.navigate('SignIn');
              }).catch(err => {
                console.log("error",err);
            })
        }catch(e) {
            console.log(e);
            alert("Wrong credentials, Please try again !!");
        }
    }
     return (
       <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',float:'left',borderRadius:hp(2.8),borderWidth:wp(0.56),marginTop:hp(9.8),height:hp(42),width:wp(100)}}>
               {/* <TouchableOpacity onPress={()=>{

                var options = {
                    title: 'Select Image',
                    storageOptions: {
                        skipBackup: true,
                        path: 'images'
                    }
                }

                launchImageLibrary(options, (response) => {

                    console.log('Response = ', response);
                    if (response.didCancel) {
                        console.log('User cancelled image picker');
                    }
                    else if (response.error) {
                        console.log('ImagePicker Error: ', response.error);
                    }
                    else if (response.customButton) {
                        console.log('User tapped custom button: ', response.customButton);
                    }else {
                        console.log('User selected a file form camera or gallery', response); 
                        const data = new FormData();
                        data.append('name', 'avatar');
                        data.append('fileData', {
                        uri : response.uri,
                        type: response.type,
                        name: response.fileName
                        });
                        const config = {
                        method: 'POST',
                            headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'multipart/form-data',
                            },
                            body: data,
                        };
                        fetch("http://192.168.1.100:3000/upload", config)
                        .then((checkStatusAndGetJSONResponse)=> {       
                             console.log("heifsfd", response.uri);
                             setImage(response.uri);
                             updateImageUrl(response.uri);
                        }).catch((err)=>{console.log(err,"hhjghg")});
                    }
                })
                }} */}
                <TouchableOpacity onPress={()=>{
                    ImagePicker.openPicker({
                    height:300,
                    width:300
                    }).then(images => {
                        console.log(images);
                        setImage(images.path);
                        updateImageUrl(images.path);
                    });
                  }}
                >
                  <Image source={{uri : image}} style={{height:hp(14),width:wp(28),borderRadius:hp(8.4),overflow:'hidden'}}/>
              </TouchableOpacity>

              <View style={{marginLeft:wp(8.4)}}>
                  <TouchableOpacity onPress ={ () => navigation.navigate("EditProfile") }>
                        <MaterialCommunityIcons name="pencil" size={hp(3.5)} color="black" style={{textAlign:'right'}} />
                  </TouchableOpacity>
                  <Text style={{fontSize:hp(2.1)}}>Chitra Mohan</Text>
                  <Text style={{fontSize:hp(2.1)}}>9637412580</Text>
                  <Text style={{fontSize:hp(2.1)}}>Chitra.VStoreBusiness@gmail.com</Text>
                  {/* <Text style={{fontSize:hp(2.1)}}>Visakhapatnam</Text> */}
               </View>
          </View>
          {/* <SafeAreaView style={{flex:3,marginTop:40}}>
              <FlatList
                  data={[
                    {id:'1',title:'My Addresses',img_icon:account_icon},
                    {id:'2',title:'My Orders',img_icon:order_icon},
                    {id:'3',title:'My Cart',img_icon:cart_icon},
                    {id:'4',title:'My Wallet',img_icon:wallet_icon},
                    {id:'5',title:'Logout',img_icon:logout_icon}
                  ]}
                  renderItem={({ item }) =>
                      <TouchableOpacity style={{height:50,alignItems:'center',flexDirection:'row'}} onPress={()=> { Alert.alert('khaja')}}>
                            <Text style={{marginLeft:15}}>{item.img_icon}</Text>
                            <Text style={{fontSize:17,marginLeft:20,color:'#696969'}}>{item.title}</Text>
                      </TouchableOpacity>
                  }
                  keyExtractor={item => item.id}
                  ItemSeparatorComponent={this.renderSeparator}  
              />
          </SafeAreaView> */}
          <View style={{flex:1,marginTop:hp(5.6)}}>
              {/* <View style={{flex:1,flexDirection:'row',height:50,borderBottomWidth:1,borderBottomColor:'#a9a9a9',borderBottom:width}}> */}
                  {/* <TouchableOpacity style={{flex:1,flexDirection:'row',height:hp(7),alignItems:'center',flexDirection:'row',borderBottomWidth:wp(0.28),borderBottomColor:'#a9a9a9',borderBottom:wp(100)}} onPress={()=>{navigation.navigate('')}}>
                      <FontAwesome5 name="address-card" size={hp(3.36)} color="#696969" style={{marginLeft:wp(4.2)}} />
                      <Text style={{fontSize:hp(2.38),marginLeft:wp(5.6),color:'#696969'}}>
                          My Preferences
                      </Text>
                  </TouchableOpacity> */}
              {/* </View> */}
              <TouchableOpacity style={{flex:1,flexDirection:'row',height:hp(7),alignItems:'center',flexDirection:'row',borderBottomWidth:wp(0.28),borderBottomColor:'#a9a9a9',borderBottom:wp(100)}} onPress={()=>{navigation.navigate('Subscriptions')}}>
                    <FontAwesome5 name="history" size={hp(3.36)} color="#696969" style={{marginLeft:wp(4.2)}} />
                    <Text style={{fontSize:hp(2.38),marginLeft:20,color:'#696969'}}>
                        My Subsciption Pack
                    </Text>
              </TouchableOpacity>
              {/* <TouchableOpacity style={{flex:1,flexDirection:'row',height:hp(7),alignItems:'center',flexDirection:'row',borderBottomWidth:wp(0.28),borderBottomColor:'#a9a9a9',borderBottom:wp(100)}} onPress={()=>{navigation.navigate('')}}>
                    <AntDesign name="shoppingcart" size={hp(3.36)} color="#696969" style={{marginLeft:wp(4.2)}} />
                    <Text style={{fontSize:hp(2.38),marginLeft:wp(5.6),color:'#696969'}}>
                         My Reviews 
                    </Text>
              </TouchableOpacity> */}
             <TouchableOpacity style={{flex:1,flexDirection:'row',height:hp(7),alignItems:'center',flexDirection:'row',borderBottomWidth:wp(0.28),borderBottomColor:'#a9a9a9',borderBottom:wp(100)}} onPress={()=>{navigation.navigate('WalletScreen')}}>
                    <Fontisto name="wallet" size={hp(3.36)} color="#696969" style={{marginLeft:wp(4.2)}} />
                    <Text style={{fontSize:hp(2.38),marginLeft:wp(5.6),color:'#696969'}}>
                        My Wallet
                    </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1,flexDirection:'row',height:hp(7),alignItems:'center',flexDirection:'row',borderBottomWidth:wp(0.28),borderBottomColor:'#a9a9a9',borderBottom:wp(100)}} onPress={()=> updateStatus()}>
                    <Ionicons name="md-exit" size={hp(3.36)} color="#696969" style={{marginLeft:wp(4.2)}} />
                    <Text style={{fontSize:hp(2.38),marginLeft:wp(5.6),color:'#696969'}}>
                         Logout
                    </Text>
              </TouchableOpacity>
          </View>
          <View style={{flex:2}}/>
        </View>
     );
}
export default AccountScreen;
