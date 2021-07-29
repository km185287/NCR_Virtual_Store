import React, {useState,useEffect} from 'react';
import {View,Button,Text,TouchableOpacity,Alert} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TextInput} from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';

function WithdrawFromWallet({ navigation }) {

    const [withdrawlAmount,setWithdrawlAmount] = useState(0);
    const [walletBalance,setWalletBalance] = useState(0);

    useEffect(() => {
        const event = navigation.addListener('focus', () => {
            // do something
            console.log("addMoneyToWallet screen in focus");
            getWalletBalance();
        });
        return event;
    },[navigation]);  

    const getWalletBalance = async() => {

       try {
            console.log("it came to fetch wallet money");
            const mobile = parseInt(await AsyncStorage.getItem("MobileNo"));
            const encodedValue = encodeURIComponent(mobile);
            console.log(encodedValue); 

            await fetch(`http://192.168.1.100:3000/fetchWalletMoney?MobileNo=${encodedValue}`, {
                method : 'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(res => res.json())
            .then( data => {
                
                console.log("data in fetch wallet",data);
                console.log("this is wallet money",data.result.WalletMoney);
                setWalletBalance(data.result.WalletMoney);
                
            })
       }catch(err) {
          console.log("Could not fetch wallet data",err);
       }
    };

    const withdrawMoney = async () => {
        
        try {

            getWalletBalance();
            console.log(walletBalance,withdrawlAmount);
            if(walletBalance < withdrawlAmount) {
                Alert.alert("Sorry, your wallet balance is less than your requested amount");
            }
            else {
        
                try {
                    const phone = await AsyncStorage.getItem("MobileNo");
                    await fetch("http://192.168.1.100:3000/WithdrawMoneyFromWallet", {
                        method:'POST',
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify({
                            WithdrawlAmount : withdrawlAmount,
                            MobileNo:phone,
                        })
                    })
                    .then(res => res.json())
                    .then(data => {
                        Alert.alert("Your request submitted successfully !!");
                        console.log(data);
                        navigation.navigate('LandingPage');
                    })
                    .catch(err => console.log(err));
                } catch(error) {
                    console.log("some error occurred when requesting withdrawl");
                    Alert.alert("some error occurred when requesting withdrawl, please try again later");
                }
            }
        } catch(e) {
            Alert.alert("Sorry there is some problem from our side, Please try after some time.");
            console.log("Error sending request to withdraw money",e);
        }
    };

    return (
      <View style={{ flex: 1,alignItems:'center'}}>
            <TextInput style={{height:hp(8),marginTop:hp(7),width:wp(85)}}
                label="Enter the Amount"
            
                type="flat"
                onChangeText={withdrawlAmount => setWithdrawlAmount(withdrawlAmount)}      
            />
          <View style={{height:hp(20),alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity style={{height:hp(6),width:wp(90),borderRadius:hp(4.2),backgroundColor:'#000',alignItems:'center',justifyContent:'center',marginTop:hp(2)}} onPress={()=> withdrawMoney()}><Text style={{color:'white'}}>Submit Request</Text></TouchableOpacity>
          </View> 
          <Text style={{fontSize:wp(4)}}> Your money will be deposited within 4-5 hours. If there is any delay, do not worry, it will be credited within 1 day.</Text>
      </View>
    );
  }
  export default WithdrawFromWallet;
  