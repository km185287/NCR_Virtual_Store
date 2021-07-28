import React, {useEffect,useState} from 'react';
import {View,Button,TouchableOpacity,Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RazorpayCheckout from 'react-native-razorpay';

import AsyncStorage from '@react-native-async-storage/async-storage';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function WalletScreen({ navigation }) {

    useEffect(() => {
        const event = navigation.addListener('focus', () => {
            // do something
            console.log("addMoneyToWallet screen in focus");
            fetchWalletMoney();
        });
        return event;
    },[navigation]);  


    const [walletMoney,setWalletMoney] = useState(0);

    const fetchWalletMoney = async() => {

       try {
            console.log("it came to fetchwalletmoney");
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
                setWalletMoney(data.result.WalletMoney);
                
            })
       }catch(err) {
          console.log("Could not fetch wallet data in fetchwalletmoney",err);
       }
  };


  const addMoney = () => {
              const amount=50;
              const encodedValue = encodeURIComponent(amount);
              try {
                  fetch(`http://192.168.1.100:3000/createOrder/?amount=${encodedValue}`,{
                    method:'GET',
                    }).then(res => res.json())
                    .then(data => {
                        
                        var options = {    
                            description: 'Will be credited into your wallet',    
                            image: 'https://i.imgur.com/3g7nmJC.png',    
                            currency: data.currency,    
                            key: 'rzp_test_te0oayDTpxfl84',    
                            amount: data.amount,    
                            name: 'RentPe Pvt. Ltd.',    
                            order_id: data.id,
                            //Replace this with an order_id created using Orders API. Learn more at https://razorpay.com/docs/api/orders.    
                            prefill: {      
                                email: 'gaurav.kumar@example.com',      
                                contact: '9191919191',      
                                name: 'Gaurav Kumar'    
                            },    
                            theme: {color: '#53a20e'}
                        }  
                            
                        RazorpayCheckout.open(options).then((data) => {   
                            // handle success   
                              console.log("WalletScreen.js >>> addMoney() >>> data after payment done",data);
                              alert(`Success: ${data.razorpay_payment_id}`); 
                        }).catch((error) => {   
                            // handle failure   
                            console.log(error);
                          alert(`Error: ${error.code} | ${error.description}`);  
                        });
                    }).catch(err => {
                        console.log("error",err)
                    })
                  
              }catch(e) {
                console.log(e);
              }
  };

    return (
      <View style={{ flex: 1}}>
          <View style={{height:hp(35),alignItems:'center',justifyContent:'center',backgroundColor:'#002858'}}>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:hp(8),fontWeight:'bold',color:'white'}}>{walletMoney} </Text>
                  <FontAwesome name="rupee" size={hp(7)} style={{marginLeft:wp(3),color:'white'}}/>
              </View>     
              <Text style={{fontSize:hp(3),color:'white',alignSelf:'center',marginTop:hp(5)}}>Wallet Balance</Text>
          </View> 
          <View style={{height:hp(20),alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity style={{height:hp(6),width:wp(90),borderRadius:hp(4.2),backgroundColor:'#000',alignItems:'center',justifyContent:'center',marginTop:hp(5)}} onPress={()=> navigation.navigate('AddMoneyToWallet')}><Text style={{color:'white'}}>Add Money</Text></TouchableOpacity>
              <TouchableOpacity style={{height:hp(6),width:wp(90),borderRadius:hp(4.2),backgroundColor:'#000',alignItems:'center',justifyContent:'center',marginTop:hp(3)}} onPress={()=> navigation.navigate('WithdrawFromWallet')}><Text style={{color:'white'}}>Withdraw money </Text></TouchableOpacity>
          </View> 
          <View style={{flex:2}}/>
      </View>
    );
  }
  export default WalletScreen;
