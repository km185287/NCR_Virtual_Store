import React,{useState,useEffect} from 'react';
import {View,Button,TouchableOpacity,Text,Alert} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RazorpayCheckout from 'react-native-razorpay';
import {TextInput} from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function AddMoneyToWallet({ navigation }) {

    const [enteredMoney,setMoneyToAdd] = useState(0);
    const [walletMoney,setWalletMoney] = useState(0);

    useEffect(() => {
        const event = navigation.addListener('focus', () => {
            // do something
            console.log("addMoneyToWallet screen in focus");
            fetchWalletMoney();
        });
        return event;
    },[navigation]);  

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
          console.log("Could not fetch wallet data",err);
       }
  };

  const saveToDB = async(amount,callback) => {

      try {

          console.log("came to save to DB");
          const mobile = parseInt(await AsyncStorage.getItem("MobileNo"));

          await fetch("http://192.168.1.100:3000/savePaymentToDB",{
              method : 'POST',
              headers : {
                  'ACCEPT' : 'application/json',
                  'Content-Type' : 'application/json'
              },
              body : JSON.stringify({
                  MobileNo : mobile,
                  WithdrawlAmount : amount,
                  TransactionStatus : 'Success',
                  Purpose : "Wallet Addition"
              })
          })
          .then(res => res.json())
          .then(data => {
              console.log("addMoneyToWallet.js >>> saveToDB() >>> Wallet Money added to DB",data);
              return callback(1);
          }).catch(err => {
              console.log(err);
              return callback(0);
          })
      } catch(error) {
          console.log("addMoneyToWallet.js >>> saveToDB() >>> Not able to save wallet addition payment to DB",error);
          return callback(0);
      }
  } 
  const updateWalletMoney = async(callback) => {

        try {
              //fetchWalletMoney();
              console.log("came to update wallet money");
              const mobile = parseInt(await AsyncStorage.getItem("MobileNo"));
              const encodedValue = encodeURIComponent(mobile);
              const tempMoney = parseInt(enteredMoney);
              const updatedMoney = encodeURIComponent(tempMoney + walletMoney);
              console.log(encodedValue,updatedMoney);
              
           await fetch(`http://192.168.1.100:3000/UpdateWalletMoney?MobileNo=${encodedValue}&WalletMoney=${updatedMoney}`,{
              method:'PUT',
              headers:{
                  'Accept':'application/json',
                  'Content-Type':'application/json'
              }
              }).then(res => res.json())
              .then(data => {
                  console.log("wallet updated success",data);
                  return callback(1);
                  //navigation.navigate('LandingPage');
              }).catch(err => {
                console.log("error",err);
                return callback(0);
            })
        }catch(e) {
            console.log(e);
            alert("Something went wrong, Please try again!!");
            return callback(0);
        }
  }

  const addMoney = async() => {
              
              //const encodedValue = encodeURIComponent(amount);
              try {
                  const mobile = parseInt(await AsyncStorage.getItem("MobileNo"));
                  const emailID = await AsyncStorage.getItem("emailID");
                  const UserName = await AsyncStorage.getItem("UserName");
                  const encodedValue = encodeURIComponent(enteredMoney);
                  console.log(enteredMoney,encodedValue,emailID,UserName,mobile);
                  fetch(`http://192.168.1.100:3000/createOrder/?amount=${encodedValue}`,{
                    method:'GET',
                    })
                    .then(res => res.json())
                    .then(data => {
                        
                        var options = {    
                            description: 'Will be credited into your wallet',    
                            image: 'https://i.imgur.com/3g7nmJC.png',    
                            currency: data.currency,    
                            key: 'rzp_test_te0oayDTpxfl84',    
                            amount: enteredMoney,    
                            name: 'RentPe Pvt. Ltd.',    
                            order_id: data.id,
                            //Replace this with an order_id created using Orders API. Learn more at https://razorpay.com/docs/api/orders.    
                            prefill: {      
                                email: emailID,      
                                contact: mobile,      
                                name: UserName    
                            },    
                            theme: {color: '#53a20e'}  
                        }  
                            
                        RazorpayCheckout.open(options).then((data) => {   
                            // handle success   
                              // alert(`Success: ${data.razorpay_payment_id}`); 
                              //please create payments table
                              console.log(data);
                              
                              verifySignature(data,function(response) {
                                  console.log("going to update wallet money, payment signature verified successfully");
                                  console.log(response);
                                  if(response) {
                                      updateWalletMoney(function(res) {
                                          if(res) {
                                              saveToDB(enteredMoney,function(result) {
                                                    if(result) {
                                                        Alert.alert('Successful Transaction !!');
                                                        navigation.navigate('LandingPage');
                                                    }
                                                    else {
                                                        Alert.alert("Wallet Money not added. Unsuccessful transaction !!");
                                                        navigation.navigate('LandingPage');
                                                    }
                                              })
                                          }
                                          else {
                                              console.log("addMoneyToWallet >>> addMoney() >>> Payment Successful but wallet money not updated");
                                          }
                                      })
                                  }
                                  else{
                                      Alert.alert("Payment Failed ! Your money if deducted will be returned back");
                                      console.log("addMoneyToWallet >>> addMoney() >>> Wallet Addition Payment Failed");
                                  }
                              })
                        })
                        .catch((error) => {   
                            // handle failure   
                          // alert(`Error: ${error.code} | ${error.description}`);  
                          console.log("Error while adding money, transaction failed",error);
                        });
                    }).catch(err => {
                        console.log("error",err)
                    })
                  
              }catch(e) {
                console.log(e);
              }
  };

    const verifySignature = (data,callback) => {

        console.log("WalletScreen >>> verifySignature() >>> checking data before verifying",data)
        try {
            fetch("http://192.168.1.100:3000/verifySignature",{

                method:'POST',
                headers : {
                    'ACCEPT':'application/json',
                    'Content-Type':"application/json"
                },
                body : JSON.stringify({
                    PaymentData : data
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log("WalletScreen >>> verifySignature() >>> data after verfying signature",data);
                return callback(1);
            })
            .catch(err => {
                console.log("WalletScreen >>> verifySignature() >>> Error while verifying payment signature",err);
                return callback(0);
            })
        } catch(e) {
            console.log("WalletScreen >>> verifySignature() >>> Error while verifying payment signature",e);
        }

    };

    return (
      <View style={{ flex: 1,alignItems:'center'}}>
            <TextInput style={{height:hp(8),marginTop:hp(7),width:wp(85)}}
                label="Enter the Amount"
            
                type="flat"
                onChangeText={enteredMoney => setMoneyToAdd(enteredMoney)}      
            />
          <View style={{height:hp(20),alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity style={{height:hp(6),width:wp(90),borderRadius:hp(4.2),backgroundColor:'#000',alignItems:'center',justifyContent:'center',marginTop:hp(2)}} onPress={()=> addMoney()}><Text style={{color:'white'}}>Proceed to Add Money</Text></TouchableOpacity>
          </View> 
      </View>
    );
  }
  export default AddMoneyToWallet;
