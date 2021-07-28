import React from 'react';
import {Text,View,ScrollView,Image,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function PendingOrderScreen({navigation}) {

    return (
         <View style={{}}>
             <ScrollView>
                 <TouchableOpacity style={{flexDirection:'row',height:hp(15),width:wp(100),marginTop:hp(3)}} onPress={()=>navigation.navigate('PendingDelivery')}>
                    <Image source={require('./Images/Banarsi.jpg')} style={{height:hp(15),width:wp(30),resizeMode:'cover'}}/>
                    <View style={{width:wp(65),marginLeft:wp(5)}}>
                        <Text>Name : Banarsi Saree</Text>
                        <Text>Category : Sarees</Text>
                        <Text>Quantity : 2</Text>
                        <Text>Price : 1000</Text>
                        <Text>Status : Pending</Text>
                    </View>
                 </TouchableOpacity>

                 <View style={{flexDirection:'row',height:hp(15),width:wp(100),marginTop:hp(3)}}>
                    <Image source={require('./Images/Primer.jpg')} style={{height:hp(15),width:wp(30),resizeMode:'cover'}}/>
                    <View style={{width:wp(65),marginLeft:wp(5)}}>
                        <Text>Name : Primer</Text>
                        <Text>Category : Beauty</Text>
                        <Text>Quantity : 1</Text>
                        <Text>Price : 350</Text>
                        <Text>Status : Pending</Text>
                    </View>
                 </View>

                 <View style={{flexDirection:'row',height:hp(15),width:wp(100),marginTop:hp(3)}}>
                    <Image source={require('./Images/Eyeliner.jpg')} style={{height:hp(15),width:wp(30),resizeMode:'cover'}}/>
                    <View style={{width:wp(65),marginLeft:wp(5)}}>
                        <Text>Name : Eye Liner</Text>
                        <Text>Category : Beauty</Text>
                        <Text>Quantity : 1</Text>
                        <Text>Price : 200</Text>
                        <Text>Status : Pending</Text>
                    </View>
                 </View>

                 <View style={{flexDirection:'row',height:hp(15),width:wp(100),marginTop:hp(3)}}>
                    <Image source={require('./Images/kancheevaramSarees.jpg')} style={{height:hp(15),width:wp(30),resizeMode:'cover'}}/>
                    <View style={{width:wp(65),marginLeft:wp(5)}}>
                        <Text>Name : Kancheevaram</Text>
                        <Text>Category : Sarees</Text>
                        <Text>Quantity : 2</Text>
                        <Text>Price : 3</Text>
                        <Text>Status : 2500</Text>
                    </View>
                 </View>
             </ScrollView>
         </View>
    );
};

export default PendingOrderScreen;