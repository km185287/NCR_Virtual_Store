import React, {useState} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Card,Title} from 'react-native-paper';
import RazorpayCheckout from 'react-native-razorpay';

//icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

function WishListScreen({navigation}) {

    const [selected,setSelected] = useState(0);

    const proceedToBuy = () => {

                var options = {    
                    description: 'Local to Global',    
                    image: 'https://i.imgur.com/3g7nmJC.png',    
                    currency: 'INR',    
                    key: 'rzp_test_IE88f8kTLtXNhd',    
                    amount: 119900,    
                    name: 'NCR VStore',    
                    //order_id: 'VStore001',
                    //Replace this with an order_id created using Orders API. Learn more at https://razorpay.com/docs/api/orders.    
                    prefill: {      
                        email: 'Snigdhareddypolipalli@gmail.com',      
                        contact: 9676791136,      
                        name: 'Snigdha Reddy'    
                    },    
                    theme: {color: '#53a20e'}  
                } 

                RazorpayCheckout.open(options).then((data) => {   
            // handle success   
                // alert(`Success: ${data.razorpay_payment_id}`); 
                //please create payments table
                console.log(data);
                navigation.navigate('LandingPage');
                
                // verifySignature(data,function(response) {
                //     console.log("going to update wallet money, payment signature verified successfully");
                //     console.log(response);
                //     if(response) {
                //         updateWalletMoney(function(res) {
                //             if(res) {
                //                 saveToDB(enteredMoney,function(result) {
                //                     if(result) {
                //                         Alert.alert('Successful Transaction !!');
                //                         navigation.navigate('LandingPage');
                //                     }
                //                     else {
                //                         Alert.alert("Wallet Money not added. Unsuccessful transaction !!");
                //                         navigation.navigate('LandingPage');
                //                     }
                //                 })
                //             }
                //             else {
                //                 console.log("addMoneyToWallet >>> addMoney() >>> Payment Successful but wallet money not updated");
                //             }
                //         })
                //     }
                //     else{
                //         Alert.alert("Payment Failed ! Your money if deducted will be returned back");
                //         console.log("addMoneyToWallet >>> addMoney() >>> Wallet Addition Payment Failed");
                //     }
                // })
        })
        .catch((error) => {   
            // handle failure   
            // alert(`Error: ${error.code} | ${error.description}`);  
            console.log("Error while adding money, transaction failed",error);
        });
    };
    
    return (
        <View style={{}}>
          <View style={{height:hp(49),marginTop:hp(1.4),width:wp(100),alignItems:'center',justifyContent:'center'}}>
            <Card style={{height:hp(49),borderRadius:hp(0.7)}}>
                <View style={{height:hp(25),width:wp(90)}}>
                   <Card.Cover source={require('./Images/watch1.jpg')} style={{height:hp(25),width:wp(90)}}/>
                   <TouchableOpacity style={{position:'absolute',right:wp(5),marginTop:hp(2)}} onPress={async()=> {}}>
                        <FontAwesome name="shopping-cart" size={hp(4)} color="red"/>
                   </TouchableOpacity>
                </View>
                <Card.Content>
                    <Text style={{fontSize:hp(2.2),marginTop:hp(1)}}>Analogue Black Dial Men's Watch (Black Dial Brown Colored Strap)</Text>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(1)}}>
                        <FontAwesome name="rupee" size={hp(3)} />
                        <Text style={{fontSize:hp(2.5),fontWeight:'bold'}}> 1199</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                            <View style={{width:wp(60)}}>
                            <Text style={{marginTop:hp(1),fontWeight:'bold',fontSize:hp(2.2)}}>Sai Balaji Watch Store</Text>
                            <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(1)}}>
                                <Text style={{fontSize:hp(2.2),fontWeight:'bold'}}> 4.2</Text>
                                <Entypo name="star" size={hp(2.5)} style={{marginLeft:wp(1)}} />
                            </View>
                            </View>
                            <View style={{width:wp(30)}}>
                                <TouchableOpacity onPress = {()=> proceedToBuy()}>
                                    <Text style={{borderRadius : hp(2),backgroundColor:'red',color:'white',borderColor:'red',padding:hp(1)}}>Proceed to buy</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                </Card.Content>
            </Card>
          </View>
        </View>
    )
}
export default WishListScreen;