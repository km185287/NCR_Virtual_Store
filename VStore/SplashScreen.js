import React from 'react';
import {View,Button,Text,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AsyncStorage from '@react-native-async-storage/async-storage';

function SplashScreen({ navigation }) {

    const fetchUserLoginStatus = async() => {

        try {
            const mobile = await AsyncStorage.getItem("MobileNo");
            const encMobile = encodeURIComponent(mobile);

            await fetch(`http://192.168.1.100:3000/fetchUserLoginStatus?MobileNo=${encMobile}`,{

                method : 'GET',
                headers : {
                    'Content-Type':'application/json'
                },
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.result.status == "Active") {
                    navigation.navigate('MainTabScreen');
                }
                else navigation.navigate('SignIn');
            })
            .catch(err => {
                console.log("SplashScreen.js >>> fetchUserLoginStatus >>> error",err);
            })
        } catch(e){
            console.log("SplashScreen.js >>> fetchUserLoginStatus >>> not able to fetch user status",e);
        }
        // const status = await AsyncStorage.getItem("UserLoginStatus");
        // console.log(status);
        // if(status == "LoggedIn") {
        //     navigation.navigate('MainTabScreen');
        // }
        // else navigation.navigate('SignIn');
    };

    setTimeout(() => {
        //fetchUserLoginStatus();
        navigation.navigate('SignIn');
    }, 3500);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'black'}}>
        <View>
            <Image source={require('./Images/VStoreLogo1.jpeg')} style={{height:hp(100),width:wp(90),resizeMode:'cover'}}/>
        </View>
      </View>
    );
}
export default SplashScreen;
  