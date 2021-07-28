import React, { Component } from 'react'
import { StyleSheet, SafeAreaView,ScrollView,TouchableOpacity,View,Text,TextInput,Alert,StatusBar,Image,Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

class SignIn extends Component { 

    constructor(props)
    {
        super(props);
        this.state = {
          phone: '',
          confirmResult: '',
          verificationCode: '',
          userId: '',
          username : '',
          password : '',
      };
    }
    
 
  validatePhoneNumber = () => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
    return regexp.test(this.state.phone)
  }

  // handleSendCode = () => {
  //   // Request to send OTP=i
  //   if (this.validatePhoneNumber()) {
  //     console.log(this.state.phone);
  //       auth()
  //       .signInWithPhoneNumber(this.state.phone)
  //       .then(confirmResult => {
  //         this.setState({ confirmResult })
  //         //console.log(confirmResult);
  //         console.log(this.state.verificationCode);
  //         console.log("hello khaja");
  //         this.props.navigation.navigate('OtpScreen',{confirmResult:confirmResult});
  //       })
  //       .catch(error => {
  //         alert(error.message)
  //         console.log(error)
  //       })
  //   } else {
  //     alert('Invalid Phone Number')
  //   } 
  // }
 
  changePhoneNumber = () => {
    this.setState({ confirmResult: null, verificationCode: '' })
  }


   checkLogin = async () => {

        const mobile = this.state.phone;
        const password = this.state.password;

        try {
              await AsyncStorage.setItem('mobileNo',mobile);
        }catch(err) {
          console.log(err);
        }
        
        fetch('http://192.168.1.100:3000/tgkp/login.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mobileNo : mobile,
                Password : password,
            })
            
        }).
        then((response) => response.text())
        .then(async (responseJson) => {   
             console.log(responseJson);
             if(responseJson == '"record found"') {
                  await AsyncStorage.setItem("UserLoginStatus","LoggedIn");
                  await this.props.navigation.navigate('MainTabScreen');
             }
        
        }).catch((error) => {
                console.log('wrong credentials');
                console.error(error);
        });
   }

   updateStatus = async() => {

        try {
              //const ItemId = await AsyncStorage.getItem("ItemID");
              const encodedValue = encodeURIComponent(this.state.phone);
              //console.log(encodedValue);
            
           fetch(`http://192.168.1.100:3000/updateUserStatus/${encodedValue}`,{
              method:'PUT',
              headers:{
                  'Accept':'application/json',
                  'Content-Type':'application/json'
              },
              body:JSON.stringify({ 
                   MobileNo:this.state.phone,
              })
              }).then(res => res.json())
              .then(data => {
                  console.log(data);
                  this.props.navigation.navigate('MainTabScreen');
              }).catch(err => {
                console.log("error",err);
            })
        }catch(e) {
            console.log(e);
            alert("Wrong credentials, Please try again !!");
        }
   }


   checkandPassCredentials = async() => {

       const mobile = this.state.phone;
       const password = this.state.password;
       console.log("SignIn.js >>> checkandPassCredentials() >>> mobile,password",mobile,password);
       if(mobile == 9637412580 && password == "Chitra@95") {
           this.props.navigation.navigate('NewUserLandingScreen');
       }
       else {
           this.props.navigation.navigate('MainTabScreen');
       }
   }

   checkCredentials = async() => {

        try {
              //const ItemId = await AsyncStorage.getItem("ItemID");
              const encodedValue = encodeURIComponent(this.state.phone);
              const pass = encodeURIComponent(this.state.password);
              //console.log(encodedValue);
              
              fetch(`http://192.168.1.100:3000/checkUser?MobileNo=${encodedValue}&Password=${pass}`,{
                  method:'GET',
                  
              }).then(res => res.json())
              .then(data => {
                  console.log("data is:",data);
                  
                  if(data.ERROR || data.result==null) {
                     alert("Wrong credentials, Please try again !!");
                     throw new Error("Something went wrong !!");
                  }

                  AsyncStorage.setItem("UserName",data.result.userName)
                  .then((res,err) => {
                      if(err) console.log("error setting username",err);
                  })
                  const phones = JSON.stringify(data.result.MobileNo);
                  AsyncStorage.setItem("MobileNo",phones)
                  .then((res,err) => {
                      if(err) console.log("error setting mobile no",err);
                      else console.log("mobile no set successfully");
                  })
                  AsyncStorage.setItem("emailID",data.result.emailID)
                  .then((res,err) => {
                      if(err) console.log("error setting mobile no",err);
                  })
                  this.updateStatus();
            }).catch(err => {
                console.log("error",err);
            })
        }catch(e) {
          //alert("Wrong credentials, Please try again !!");
          console.log(e);
            
        }         
   }
  render() {
    const height=Dimensions.get('window').height;
    const width=Dimensions.get('window').width;

    const sw=wp(70);
    return (
    
        <ScrollView>
        <SafeAreaView>
         <View style={{flex:1,backgroundColor:'#002858'}}>
                <StatusBar  
                              backgroundColor = "#b3e6ff"  
                              barStyle = "dark-content"   
                              hidden = {false}    
                              translucent = {false}  
                  />  
                  <View style={{height:hp(15),alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:hp(4.2),color:'white'}}>Welcome!!</Text>
                  </View>
                  <View style={{height:hp(50),alignItems:'center',justifyContent:'center'}}>
                        <View style={{flexDirection:'row',backgroundColor:'white',width:sw,borderRadius:hp(4.2),height:hp(7),overflow:'hidden'}}>
                            <AntDesign name="mobile1" size={hp(3.4)} color="#00BFFF" style={{padding:hp(1.4),marginLeft:wp(2.8)}}/>
                            <TextInput style={{fontSize:hp(2.1),overflow:'hidden',width:sw,color:'black'}} 
                            placeholder="Mobile No."
                            keyboardType={Platform.OS === 'ios'? "number-pad":"numeric"}
                            //numeric value
                            //value={this.state.phone}

                             onChangeText={(phone) => {
                                this.setState({ phone : phone })
                             }}

                             maxLength={15}
                             //editable={this.state.confirmResult ? false : true}
                            /> 
                        </View>    

                        <View style={{flexDirection:'row',backgroundColor:'white',width:sw,borderRadius:hp(4.2),height:hp(7),overflow:'hidden',marginTop:hp(4.2)}}>
                            <Fontisto name="key" size={hp(3.1)} color="#00BFFF" style={{padding:hp(1.4),marginLeft:wp(2.8)}}/>
                            <TextInput style={{fontSize:hp(2.1),overflow:'hidden',width:sw,color:'black'}} 
                            placeholder="Password"
                            keyBoardType="phone-pad"
                            secureTextEntry={true}
                            //value={this.state.phone}

                             onChangeText={(pass) => {
                                this.setState({ password : pass })
                             }}

                             maxLength={15}
                             editable={this.state.confirmResult ? false : true}
                            /> 
                        </View>
                        <TouchableOpacity style={{backgroundColor:'white',width:sw,borderRadius:hp(4.2),marginTop:hp(4.2),height:hp(5.6),backgroundColor:'#00BFFF',alignItems:'center',justifyContent:'center'}}
                            onPress={
                                   () => this.checkandPassCredentials()
                            }>
                            <Text style={{fontSize:hp(2.7),color:'white'}}>
                                Sign In
                            </Text>
                        </TouchableOpacity>  
                       
                        

                        <View style={{marginTop:hp(8.5)}}>
                             <Text style={{fontWeight:'bold',fontSize:hp(2.1),color:'white'}} onPress={()=>this.props.navigation.navigate('SignUp')}>Sign Up</Text>
                        </View>
                    </View>
                <View style={{height:hp(35)}}> 
                        <Text style={{color:'white',fontSize:hp(2.1)}}>** We will send you an OTP to your registered mobile number.</Text>
                </View>          
          </View>
        </SafeAreaView>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa'
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    marginTop: hp(2.8),
    width: '90%',
    height: hp(5.6),
    borderColor: '#555',
    borderWidth: hp(0.28),
    borderRadius: hp(0.7),
    paddingLeft: wp(2.8),
    color: '#fff',
    fontSize: hp(2.24)
  },
  themeButton: {
    width: '90%',
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#888',
    borderColor: '#555',
    borderWidth: hp(0.28),
    borderRadius: hp(0.7)
  },
  themeButtonTitle: {
    fontSize: hp(3.36),
    fontWeight: 'bold',
    color: '#fff'
  },
  verificationView: {
    width: '100%',
    alignItems: 'center',
    marginTop: hp(7)
  }
})

export default SignIn
