import React,{useState,useEffect} from 'react';
import {View,Button,Text, TouchableOpacity,ScrollView,Alert} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import RazorpayCheckout from 'react-native-razorpay';

function SubscriptionScreen({ navigation }) {

    const [pack,setPack] = useState(0);
    const [numPostings,setNumPostings] = useState(0);
    const [duration,setDuration] = useState(90);
    const [currentPack,setCurrentPack] = useState(0);
    const [currentAvailablePostings,setCurrentAvailablePostings] = useState(0);
    const [currentPackDuration,setCurrentPackDuration] = useState(0);

    const saveToDB = async(amount,callback) => {

      try {

          //console.log("came to save to DB",pack,numPostings,duration);
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
                  Purpose : "Subscription Pack buy"
              })
          })
          .then(res => res.json())
          .then(data => {
              console.log("Subscription.js >>> saveToDB() >>> Subscription Pack added to DB",data);
              return callback(1);
          }).catch(err => {
              console.log(err);
              return callback(0);
          })
      } catch(error) {
          console.log("Subscription.js >>> saveToDB() >>> Not able to save subscription payment to DB",error);
          return callback(0);
      }
    } 

    const fetchCurrentSubscriptionPackDetails = async() => {

        try {
            const mobile = await AsyncStorage.getItem("MobileNo");
            const encMobile = encodeURIComponent(mobile);

            await fetch(`http://192.168.1.100:3000/fetchCurrentSubscriptionPackDetails?MobileNo=${encMobile}`,{

                method : 'GET',
                headers : {
                    'Content-Type':'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log("Subscription.js >>> fetchCurrentSubscriptionPackDetails() >>> data",data);
                setCurrentPack(data.result.SubscriptionPack.PackAmount);
                setCurrentAvailablePostings(data.result.SubscriptionPack.RemainingPostings);
                setCurrentPackDuration(data.result.SubscriptionPack.Duration);
            })
            .catch(err => {
                console.log("Subscription.js >>> fetchCurrentSubscriptionPackDetails() >>> Error",err);
            })
        } catch(err) {
            console.log("Subscription.js >>> fetchCurrentSubscriptionPackDetails() >>> Not able to fetch current pack details",err);
        }
    }

    useEffect(() => {
        const event = navigation.addListener('focus', () => {
           console.log("Subscription.js screen in focus");
           fetchCurrentSubscriptionPackDetails();
        });
        return () => {
            event;
        }
    },[navigation]);

    async function updateSubscriptionPack(packAmount,PostingsAvailable,packDuration,callback) {

            const mobile = parseInt(await AsyncStorage.getItem("MobileNo"));     
            const encMobile = encodeURIComponent(mobile);

            const myCurrentDate=new Date();
            const myFutureDate=new Date(myCurrentDate);
            myFutureDate.setDate(myFutureDate.getDate()+ packDuration);
            
            console.log(myFutureDate);

            const subpack = {
                "PackAmount" : packAmount,
                "RemainingPostings" : PostingsAvailable,
                "Duration" : myFutureDate
            }

            console.log(subpack);
            try {
                await fetch(`http://192.168.1.100:3000/updateSubscriptionPack?MobileNo=${encMobile}`, {
                    method:'PUT',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body : JSON.stringify({
                        SubscriptionPack : subpack
                    })
                })
                .then(res => res.json())
                .then(data => {
                    console.log("Subscription.js >>> UpdateSubscriptionPack >>> Successfull update of Subscription pack",data);
                    return callback(1);
                })
                .catch(error => {
                    console.log("Subscription.js >>> UpdateSubscriptionPack >>> could not update subscription pack",error);
                    return callback(0);
                })
            } catch(e) {
                console.log("Subscription.js >>> UpdateSubscriptionPack >>> Error in UpdateSubscriptionPack",error);
                return callback(0);
            }   
    };

    
    const verifySignature = (data,callback) => {

        console.log("Subscription.js >>> verifySignature() >>> checking data before verifying",data)
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

    async function checkout(packAmount,PostingsAvailable,packDuration) {  

          const mobile = parseInt(await AsyncStorage.getItem("MobileNo"));
          const emailID = await AsyncStorage.getItem("emailID");
          const UserName = await AsyncStorage.getItem("UserName");

         const encodedValue = await encodeURIComponent(packAmount);

          try {
              fetch(`http://192.168.1.100:3000/createOrder/?amount=${encodedValue}`,{
                method:'GET',
                }).then(res => res.json())
                .then(data => {
                    
                    var options = {    
                        description: 'Subscription Pack',    
                        image: 'https://i.imgur.com/3g7nmJC.png',    
                        currency: data.currency,    
                        key: 'rzp_test_te0oayDTpxfl84',    
                        amount: packAmount,    
                        name: 'RentPe Pvt. Ltd.',    
                        order_id: data.id,
                        //Replace this with an order_id created using Orders API. Learn more at https://razorpay.com/docs/api/orders.    
                        prefill: {      
                            email: emailID,      
                            contact: mobile,      
                            name: UserName,    
                        },    
                        theme: {color: '#002858'}  
                    }  
                        
                    RazorpayCheckout.open(options).then((data) => {   
                        // handle success   
                          //alert(`Success: ${data.razorpay_payment_id}`); 
                          
                              console.log(data);
                              
                              verifySignature(data,function(response) {
                                  console.log("going to update subscription pack money, payment signature verified successfully");
                                  console.log(response);
                                  if(response) {
                                      updateSubscriptionPack(packAmount,PostingsAvailable,packDuration,function(res) {
                                          if(res) {
                                              saveToDB(packAmount,function(result) {
                                                    if(result) {
                                                        Alert.alert('Successful Transaction !!');
                                                        navigation.navigate('LandingPage');
                                                    }
                                                    else {
                                                        Alert.alert("Subscription Pack Money not added. Unsuccessful transaction !!");
                                                        navigation.navigate('LandingPage');
                                                    }
                                              })
                                          }
                                          else {
                                              console.log("Subscription.js >>> addMoney() >>> Payment Successful but subscription money not updated");
                                          }
                                      })
                                  }
                                  else{
                                      Alert.alert("Payment Failed ! Your money if deducted will be returned back");
                                      console.log("Subscription.js >>> addMoney() >>> Subscription Pack Payment Failed");
                                  }
                              })
                    }).catch((error) => {   
                        // handle failure   
                      //alert(`Error: ${error.code} | ${error.description}`); 
                      console.log("Error adding money in Subscriptions, transaction failed",error); 
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
            <View>
                <Text style={{fontWeight:'bold',fontSize:hp(2.2),marginTop:hp(3)}}> Your Current Pack :</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{left:wp(2)}}>{currentAvailablePostings}  Postings</Text>
                        <Text style={{right:wp(5),position:'absolute'}}>{currentPack}</Text>
                    </View>
            </View>
            <View style={{marginTop:hp(3)}}>
               <Text style={{fontWeight:'bold',fontSize:hp(2.2)}}> Choose your Subscription Pack :</Text>

            <ScrollView
                  vertical={true}
                  showsVerticalScrollIndicator={false}
                  nestedScrollEnabled={true}
                  style={{marginTop:hp(3)}}
            >
                <View style={{}}>
                    <Text style={{marginLeft:wp(3)}}>No. of Postings wise :</Text>

                <Card style={{marginTop:hp(2)}}>
                    <Card.Content>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress = {()=> { setPack(99); setNumPostings(1); checkout(99,1,90); }}>
                            <Text style={{}}>1 Posting</Text>
                            <Text style={{right:0,position:'absolute'}}>99</Text>
                        </TouchableOpacity>
                    </Card.Content>
                </Card>
          
                <Card style={{marginTop:hp(1)}}>
                    <Card.Content>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress = {()=> { setPack(240); setNumPostings(3); checkout(240,3,90); }}>
                            <Text style={{}}>3 Postings</Text>
                            <Text style={{right:0,position:'absolute'}}>240</Text>
                        </TouchableOpacity>
                    </Card.Content>
                </Card>

                <Card style={{marginTop:hp(1)}}>
                    <Card.Content>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress = {()=> { setPack(350); setNumPostings(5); checkout(350,5,90); }}>
                            <Text style={{}}>5 Posting</Text>
                            <Text style={{right:0,position:'absolute'}}>350</Text>
                        </TouchableOpacity>
                    </Card.Content>
                </Card>

                <Card style={{marginTop:hp(1)}}>
                    <Card.Content>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress = {()=> { setPack(570); setNumPostings(10); checkout(570,10,90); }}>
                            <Text style={{}}>10 Postings</Text>
                            <Text style={{right:0,position:'absolute'}}>570</Text>
                        </TouchableOpacity>
                    </Card.Content>
                </Card>

                {/* <Card style={{marginTop:hp(1)}}>
                    <Card.Content>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress = {()=> setPack(350)}>
                            <Text style={{}}>5 Posting</Text>
                            <Text style={{right:0,position:'absolute'}}>350</Text>
                        </TouchableOpacity>
                    </Card.Content>
                </Card> */}
              </View>
              <View style={{marginTop:hp(4)}}>
                  <Text style={{marginLeft:wp(3)}}>Duration Wise : </Text>
                  <Card style={{marginTop:hp(2)}}>
                      <Card.Content>
                          <TouchableOpacity onPress = {()=> { setPack(550); setNumPostings(10); setDuration(30); checkout(550,10,30); }} style={{}}>
                              <TouchableOpacity style={{flexDirection:'row'}}>
                                   <Text style={{}}>1 Month</Text>
                                   <Text style={{right:0,position:'absolute'}}>550</Text>
                              </TouchableOpacity>
                              <Text style={{marginTop:hp(1)}}>(Upto 10 Postings)</Text>
                          </TouchableOpacity>
                      </Card.Content>
                  </Card>

                  <Card style={{marginTop:hp(1)}}>
                      <Card.Content>
                          <TouchableOpacity onPress = {()=> { setPack(1350); setNumPostings(15); setDuration(90); checkout(1350,15,90); }} style={{}}>
                              <TouchableOpacity style={{flexDirection:'row'}}>
                                   <Text style={{}}>3 Months</Text>
                                   <Text style={{right:0,position:'absolute'}}>1350</Text>
                              </TouchableOpacity>
                              <Text style={{marginTop:hp(1)}}>(Upto 15 Postings)</Text>
                          </TouchableOpacity>
                      </Card.Content>
                  </Card>

                  <Card style={{marginTop:hp(1)}}>
                      <Card.Content>
                          <TouchableOpacity onPress = {()=> { setPack(2400); setNumPostings(25); setDuration(180); checkout(2400,25,180); }} style={{}}>
                              <TouchableOpacity style={{flexDirection:'row'}}>
                                   <Text style={{}}>6 Months</Text>
                                   <Text style={{right:0,position:'absolute'}}>2400</Text>
                              </TouchableOpacity>
                              <Text style={{marginTop:hp(1)}}>(Upto 25 Postings)</Text>
                          </TouchableOpacity>
                      </Card.Content>
                  </Card>
              </View>
              <Text style={{marginTop:hp(2),height:hp(30)}}>Note : If you buy a new pack, remaining postings present in current pack will be replaced with postings as per new pack and no carry forward of postings is available for now.</Text>
              {/* <View style={{height:hp(10)}}/> */}
            </ScrollView>
          </View>
      
      </View>
    );
  }
  export default SubscriptionScreen;
  