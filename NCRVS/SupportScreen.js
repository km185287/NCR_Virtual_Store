import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SupportScreen({navigation}) {

     console.log('entered support screen');
     return (
       <View style={{flex:1}}>
          
             <TouchableOpacity style={{marginTop:hp(0.7),backgroundColor:'white',height:hp(7),justifyContent:'center' }} onPress={()=>navigation.navigate('Contact')}>
                 <Text style={{fontSize:hp(2.52)}}>Contact Us</Text>
                 <FontAwesome name="angle-right" size={hp(3.36)} color="black" style={{position:'absolute',right:0}} />
             </TouchableOpacity>
         
             <TouchableOpacity style={{marginTop:hp(0.7),backgroundColor:'white',height:hp(7),justifyContent:'center'}} onPress={()=>navigation.navigate('PayRef')}>
                 <Text style={{fontSize:hp(2.52)}}>Payments & Refunds</Text>
                 <FontAwesome name="angle-right" size={hp(3.36)} color="black" style={{position:'absolute',right:0}} />
             </TouchableOpacity>

             <TouchableOpacity style={{marginTop:hp(0.7),backgroundColor:'white',height:hp(7),justifyContent:'center'}} onPress={()=>navigation.navigate('Orders')}>
                 <Text style={{fontSize:18}}>Manage your Orders</Text>
                 <FontAwesome name="angle-right" size={hp(3.36)} color="black" style={{position:'absolute',right:0}} />
             </TouchableOpacity>

             <TouchableOpacity style={{marginTop:hp(0.7),backgroundColor:'white',height:hp(7),justifyContent:'center'}} onPress={()=>navigation.navigate('FAQ')}>
                 <Text style={{fontSize:hp(2.52)}}>Booking Services</Text>
                 <FontAwesome name="angle-right" size={hp(3.36)} color="black" style={{position:'absolute',right:0}} />
             </TouchableOpacity>

             <TouchableOpacity style={{marginTop:hp(0.7),backgroundColor:'white',height:hp(7),justifyContent:'center'}} onPress={()=>navigation.navigate('About')}>
                 <Text style={{fontSize:hp(2.52)}}>About Us</Text>
                 <FontAwesome name="angle-right" size={hp(3.36)} color="black" style={{position:'absolute',right:0}} />
             </TouchableOpacity>
       </View>
     );
}