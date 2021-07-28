import React from 'react';
import {View,Text,TouchableOpacity,SafeAreaView,ScrollView,StatusBar} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Ionicons from 'react-native-vector-icons/Ionicons';

function NewUserLandingScreen({navigation}) {

    return (
     <SafeAreaView>
        <ScrollView>
            <StatusBar  
                        backgroundColor = "#b3e6ff"  
                        barStyle = "dark-content"   
                        hidden = {false}    
                        translucent = {false}  
            /> 
                <View style={{height:hp(8.4),width:wp(100),flexDirection:'row',backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                    {/* <TouchableOpacity onPress={()=>navigation.openDrawer()} style={{flex:1}}>
                        <Ionicons name="md-menu" size={30} color="#000000" style={{margin:10}} />
                    </TouchableOpacity> */}
                    <View style={{flex:8}}>
                    <Text style={{marginLeft:wp(5.6),fontSize:hp(2.8),fontWeight:'bold'}}>Hi   !!</Text>
                    </View>
                    {/* <TouchableOpacity style={{flex:1}}>
                        <Entypo name="location" size={hp(3.5)}/>
                    </TouchableOpacity> */}
                    <View>
                        <TouchableOpacity onPress={()=>navigation.navigate('AccountStack')} style={{flex:1}}>
                            <Ionicons name="md-person" size={hp(3.5)} color="black" style={{margin:hp(2.8)}} />
                        </TouchableOpacity>
                    </View>  
                </View>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity style={{height:hp(6),width:wp(90),marginTop:hp(3),alignItems:'center',justifyContent:'center',backgroundColor:'black',borderRadius:hp(4.2)}} onPress={()=> navigation.navigate('CreateStoreStack')}>
                        <Text style={{color:'white'}}>Create a New Store</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={{fontWeight:'bold',marginTop:hp(3),fontSize:hp(2.3)}}>Here is what NCR VS offers you !!</Text>
                        <Text style={{marginTop:hp(2),fontSize:hp(2.1),marginLeft:wp(2)}}>1. Create your own virtual store and sell your products online.</Text>
                        <Text style={{fontSize:hp(2.1),marginTop:hp(2),marginLeft:wp(2)}}>2. You can share your store and reach out to customers directly</Text>
                        <Text style={{fontSize:hp(2.1),marginTop:hp(2),marginLeft:wp(2)}}>3. You can Advertise your store, products on our platform to generate more sales.</Text>
                        <Text style={{fontSize:hp(2.1),marginTop:hp(2),marginLeft:wp(2)}}>4. No Maintanance Charges or hidden charges, just 5% of every transaction you do.</Text>
                        <Text style={{fontSize:hp(2.1),marginTop:hp(2),marginLeft:wp(2)}}>5. We take care of picking and dropping off your products.</Text>
                        <Text style={{fontSize:hp(2.1),marginTop:hp(2),marginLeft:wp(2)}}>6. We also do Inventory Management for you, inform you when the stock is less than your defined limit.</Text>
                    </View>
                </View>
        </ScrollView>
     </SafeAreaView>
    )
}
export default NewUserLandingScreen;