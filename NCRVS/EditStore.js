import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import {Input} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

function EditStore({navigation}) {

    return (
        <View style={{flex:1}}>
            <View style={{height:hp(40),width:wp(100),backgroundColor:'grey',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
                    <Feather name="plus-square" size={hp(6)} color="white"/>
                    <Text style={{color:'white',fontSize:hp(3)}}>Upload Images</Text>
                </TouchableOpacity>
            </View>

            <Input
                placeholder="Store Name"
                //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                style={{marginTop:hp(3),fontSize:hp(2.3)}}
                onChangeText={value => this.setState({ comment: value })}
            />
            <Input
                placeholder="Store Contact No"
                //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                style={{marginTop:hp(-4),fontSize:hp(2.3)}}
                onChangeText={value => this.setState({ comment: value })}
            />
            <Input
                placeholder="Business Mail (Optional)"
                //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                style={{marginTop:hp(-4),fontSize:hp(2.3)}}
                onChangeText={value => this.setState({ comment: value })}
            />
            <Input
                placeholder="Address"
                //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                style={{marginTop:hp(-4),fontSize:hp(2.3)}}
                onChangeText={value => this.setState({ comment: value })}
            />
            <TouchableOpacity style={{position:'absolute',bottom:hp(0),width:wp(100),height:hp(7),alignItems:'center',justifyContent:'center',backgroundColor:'black'}} onPress={()=> navigation.navigate('MainTabScreen')}>
                <Text style={{color:'white'}}>Done</Text>
            </TouchableOpacity>
        </View>
    );
}
export default EditStore;