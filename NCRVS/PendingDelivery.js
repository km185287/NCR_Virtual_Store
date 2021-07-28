import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function SampleScreen({navigation}) {

    return (
        <View style={{flex:1}}>
            <View style={{height:hp(30),alignItems:'center',justifyContent:'center'}}>
                <Image source={require('./Images/Banarsi.jpg')} style={{height:hp(30),width:wp(100),resizeMode:'cover'}}/>
                <View style={{position:'absolute'}}>
                </View>
            </View>
            <View style={{marginTop:hp(3)}}>
                <Text style={{fontWeight:'bold',fontSize:hp(3)}}>Order Details</Text>
                <View style={{marginTop:hp(3)}}>
                     <Text style={{fontSize:hp(2.1),marginLeft:wp(2)}}>User Name</Text>
                     <Text style={{position:'absolute',right:wp(5)}}>Snigdha</Text>
                     <View style={{borderBottom:hp(0.1),borderWidth:hp(0.1),borderColor:'grey',margin:hp(1)}}/>
                </View>
                <View style={{marginTop:hp(1)}}>
                     <Text style={{fontSize:hp(2.1),marginLeft:wp(2)}}>Contact No.</Text>
                     <Text style={{position:'absolute',right:wp(5)}}>9536278140</Text>
                     <View style={{borderBottom:hp(0.1),borderWidth:hp(0.1),borderColor:'grey',margin:hp(1)}}/>
                </View>
                <View style={{marginTop:hp(1)}}>
                     <Text style={{fontSize:hp(2.1),marginLeft:wp(2)}}>Quantity Ordered </Text>
                     <Text style={{position:'absolute',right:wp(5)}}>2 pcs</Text>
                     <View style={{borderBottom:hp(0.1),borderWidth:hp(0.1),borderColor:'grey',margin:hp(1)}}/>
                </View>
                <View style={{marginTop:hp(1)}}>
                     <Text style={{fontSize:hp(2.1),marginLeft:wp(2)}}>Payment Method</Text>
                     <Text style={{position:'absolute',right:wp(5)}}>Prepaid</Text>
                     <View style={{borderBottom:hp(0.1),borderWidth:hp(0.1),borderColor:'grey',margin:hp(1)}}/>
                </View>
                <View style={{marginTop:hp(1)}}>
                     <Text style={{fontSize:hp(2.1),marginLeft:wp(2)}}>Amount</Text>
                     <Text style={{position:'absolute',right:wp(5)}}>2000</Text>
                     <View style={{borderBottom:hp(0.1),borderWidth:hp(0.1),borderColor:'grey',margin:hp(1)}}/>
                </View>
                <View style={{marginTop:hp(1)}}>
                     <Text style={{width:wp(30),fontSize:hp(2.1),marginLeft:wp(2)}}>Delivery Address</Text>
                     <Text style={{width:wp(60),position:'absolute',right:wp(5)}}>Opp. Melange Towers, Hitech City, Hyderabad</Text>
                     <View style={{borderBottom:hp(0.1),borderWidth:hp(0.1),borderColor:'grey',margin:hp(1)}}/>
                </View>
                <View style={{marginTop:hp(1)}}>
                     <Text style={{width:wp(30),fontSize:hp(2.1),marginLeft:wp(2)}}>Status</Text>
                     <Text style={{width:wp(50),position:'absolute',right:wp(5)}}>Waiting for Manufacturer's response</Text>
                     <View style={{borderBottom:hp(0.1),borderWidth:hp(0.1),borderColor:'grey',marginTop:hp(2)}}/>
                </View>
            </View>
            <TouchableOpacity style={{position:'absolute',bottom:0,width:wp(100),height:hp(7),alignItems:'center',justifyContent:'center',backgroundColor:'black'}} onPress={()=> navigation.navigate('LandingPage')}>
                <Text style={{color:'white'}}>Process, set Order Status to Shipped</Text>
            </TouchableOpacity>
        </View>
    )
}
export default SampleScreen;