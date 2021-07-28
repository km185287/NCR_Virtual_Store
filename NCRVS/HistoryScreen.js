import React from 'react';
import {Text,View,ScrollView,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function HistoryScreen({navigation}) {

    return (
         <View style={{}}>
             <ScrollView>
                 <View style={{flexDirection:'row',height:hp(15),width:wp(100),marginTop:hp(3)}}>
                    <Image source={require('./Images/Chikankari.jpg')} style={{height:hp(15),width:wp(30),resizeMode:'cover'}}/>
                    <View style={{width:wp(65),marginLeft:wp(5)}}>
                        <Text>Name : Chikankari Saree</Text>
                        <Text>Category : Sarees</Text>
                        <Text>Quantity : 2</Text>
                        <Text>Price : 2300</Text>
                        <Text>Status : Pending</Text>
                    </View>
                 </View>

                 <View style={{flexDirection:'row',height:hp(15),width:wp(100),marginTop:hp(3)}}>
                    <Image source={require('./Images/blush.jpg')} style={{height:hp(15),width:wp(30),resizeMode:'cover'}}/>
                    <View style={{width:wp(65),marginLeft:wp(5)}}>
                        <Text>Name : Blush</Text>
                        <Text>Category : Beauty</Text>
                        <Text>Quantity : 1</Text>
                        <Text>Price : 350</Text>
                        <Text>Status : Pending</Text>
                    </View>
                 </View>

                 <View style={{flexDirection:'row',height:hp(15),width:wp(100),marginTop:hp(3)}}>
                    <Image source={require('./Images/Kasavu.jpg')} style={{height:hp(15),width:wp(30),resizeMode:'cover'}}/>
                    <View style={{width:wp(65),marginLeft:wp(5)}}>
                        <Text>Name : Kasavu</Text>
                        <Text>Category : Sarees</Text>
                        <Text>Quantity : 1</Text>
                        <Text>Price : 200</Text>
                        <Text>Status : Pending</Text>
                    </View>
                 </View>

             </ScrollView>
         </View>
    );
};

export default HistoryScreen;