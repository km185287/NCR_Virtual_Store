import React, {Component} from 'react';
import {View, Text, Image,Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const width=Dimensions.get('window').width;

export default function AboutScreen({navigation}) {

    return (
        <View style={{flex:1}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Image source={require('./Images/VStoreBusinessLogo.jpeg')} style={{marginTop:hp(9),height:hp(30),width:wp(100),resizeMode:'cover'}}/>
              {/* <View style={{backgroundColor:'#002858',height:hp(21),width:wp(100)}}>

              </View> */}
            </View>
            <View style={{flex:3,marginTop:hp(15)}}>
                <Text style={{fontSize:hp(2.24),marginLeft:wp(2),marginRight:wp(2)}}>
                    Welcome to VStore, a initiative by NCR Corporation to drive local businesses to sell their products worldwide. Currently we are providing our services in India and are planning to launch in other countries too. Our main focus is to maximize profits to both local businesses and also to normal users.
                </Text>
            </View>
        </View>
        
    )
}