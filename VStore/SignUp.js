import React,{Component} from 'react';
import {Button, Text,View,TextInput,Dimensions,TouchableOpacity,Image,Alert,StyleSheet,SafeAreaView,ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

//import auth from '@react-native-firebase/auth';
//import firestore from '@react-native-firebase/firestore';

class SignUp extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
          mobile:0,
          confirmResult: '',
          name:'',
          emailID:'',
          age:0,
          password:'',
      };
    }

    saveCred = () => {

        const mobile = this.state.mobile;
        const username = this.state.name;
        const email = this.state.emailID;
        const age = this.state.age;
        const password = this.state.password;

        console.log('entered into mongo db');
        console.log(mobile);
        try {

                fetch("http://192.168.1.100:3000/SignUp",{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        userName:username,
                        emailID:email,
                        Age:age,
                        Password:password,
                        MobileNo:mobile,
                    })
                    }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                        console.log('now going to SignIn page');
                        this.props.navigation.navigate('SignIn');
                    }).catch(err => {
                        console.log("error",err)
                    })
        } catch(e){
            console.log(e);
        }
            
    }
    validatePhoneNumber = () => {
        console.log(this.state.mobile);
        var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
        return regexp.test(this.state.mobile);
    }

    // sendOtp = () => {

    //     if (this.validatePhoneNumber()) {
    //     console.log(this.state.mobile);
    //         auth()
    //         .signInWithPhoneNumber(this.state.mobile)
    //         .then(confirmResult => {
    //         this.setState({ confirmResult:confirmResult })

            
    //         // const data=firestore().collection('Users').add({
    //         //     Name:this.state.name,
    //         //     Mobile:this.state.mobile,
    //         //     Email:'',
    //         //     Address:'',
    //         //     DOB:Date.now()
    //         // });
    //         this.saveCred();
    //       })
    //     } else {
    //     alert('Invalid Phone Number')
    //     } 
    // }
    render() {

    const height=Dimensions.get('window').height;
    const width=Dimensions.get('window').width;
    const sw=0.8*width;
    const img_height=0.2*height;
    const img_width=0.6*width;
    const button_width=0.4*width;
    const nextWidth=0.4*width;

    return (
        
        <ScrollView>
        <SafeAreaView>
            
                <View style={{flex:1,backgroundColor:'#002858'}}>     
                
                    <View style={{height:hp(15),flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:hp(4.2)}}>Namaskaram </Text>
                        <FontAwesome5 name="praying-hands" size={hp(4.2)} color="white" />
                    </View>
                    <View style={{height:hp(60),alignItems:'center',justifyContent:'center'}}>
                            <View style={{flex:1,flexDirection:'row',backgroundColor:'white',width:sw,borderRadius:hp(4.2),height:hp(6.3)}}>
                                <AntDesign name="mobile1" size={hp(3.36)} color="#00BFFF" style={{padding:hp(1.4),marginLeft:wp(2.8)}}/>
                                <TextInput style={{fontSize:hp(2.1)}}
                                placeholder="Mobile No."
                                onChangeText={mobile => {
                                    this.setState({mobile:mobile})
                                }}
                                keyboardType={Platform.OS === 'ios'? "number-pad":"numeric"}
                                numeric value
                                overflow='hidden'
                                /> 
                            </View>    

                            <View style={{flex:1,flexDirection:'row',backgroundColor:'white',width:sw,borderRadius:hp(4.2),height:hp(6.3),marginTop:hp(4.2)}}>
                                        <Ionicons name="person" size={hp(3.36)} color="#00BFFF" style={{padding:hp(1.4),marginLeft:wp(2.8)}}/>
                                        <TextInput style={{fontSize:hp(2.1)}}
                                        placeholder="Name"
                                        onChangeText={name => {
                                            this.setState({name:name})
                                        }}
                                        keyBoardType="phone-pad"
                                        overflow='hidden'
                                        /> 
                            </View> 

                            <View style={{flex:1,flexDirection:'row',backgroundColor:'white',width:sw,borderRadius:hp(4.2),height:hp(6.3),marginTop:hp(4.2)}}>
                                        <MaterialIcons name="email" size={hp(3.36)} color="#00BFFF" style={{padding:hp(1.4),marginLeft:wp(2.8)}}/>
                                        <TextInput style={{fontSize:hp(2.1)}}
                                        placeholder="Email Id (Optional)"
                                        onChangeText={emailID => {
                                            this.setState({emailID:emailID})
                                        }}
                                        keyBoardType="phone-pad" 
                                        /> 
                            </View>
                            <View style={{flex:1,flexDirection:'row',backgroundColor:'white',width:sw,borderRadius:hp(4.2),height:hp(6.3),marginTop:hp(4.2)}}>
                                        <FontAwesome name="calendar-times-o" size={hp(3.36)} color="#00BFFF" style={{padding:hp(1.4),marginLeft:wp(2.8)}}/>
                                        <TextInput style={{fontSize:hp(2.1)}}
                                        placeholder="Age (Optional)"
                                        onChangeText={age => {
                                            this.setState({age : age})
                                        }}
                                        keyboardType={Platform.OS === 'ios'? "number-pad":"numeric"}
                                        numeric value
                                        /> 
                            </View>
                            
                            <View style={{flex:1,flexDirection:'row',backgroundColor:'white',width:sw,borderRadius:hp(4.2),height:hp(6.3),marginTop:hp(4.2)}}>
                                        <Fontisto name="key" size={hp(3.1)} color="#00BFFF" style={{padding:hp(1.4),marginLeft:wp(2.8)}}/>
                                        <TextInput style={{fontSize:hp(2.1)}}
                                        placeholder="Password"
                                        onChangeText={password => {
                                            this.setState({password:password})
                                        }}
                                        keyBoardType="phone-pad" 
                                        /> 
                            </View>

                            <View style={{alignItems:'center',justifyContent:'center',marginTop:hp(1.4)}}>
                                <TouchableOpacity style={{right:0,backgroundColor:'white',width:nextWidth,borderRadius:hp(4.2),marginTop:hp(4.2),height:hp(5.6),backgroundColor:'#00BFFF',alignItems:'center',justifyContent:'center'}}
                                onPress={()=> { this.saveCred()  }
                                }>
                                <Text style={{fontSize:hp(2.1),color:'white'}}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{height:hp(10),flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <Text style={{color:'white',fontWeight:'bold'}} onPress={()=>this.props.navigation.navigate('SignIn')}>Have an Account?? Login</Text>
                        </View>  
                        <View style={{height:hp(15)}}/>
                        {/* <Text style={{color:'white',fontSize:15}}>** We will send you an OTP to your registered mobile number.</Text> */}
                </View>

            
        </SafeAreaView>
        </ScrollView>
    );
  }
}
export default SignUp;


