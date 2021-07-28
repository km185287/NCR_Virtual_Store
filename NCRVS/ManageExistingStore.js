import React from 'react';
import {View,Text,TouchableOpacity,Image,Alert} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function ManageExistingStore({navigation}) {


    const delStore = () => {

        Alert.alert(
          '',
          'Confirm Store Deletion ?',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
            {text: 'OK', onPress: () => { Alert.alert('','Your store deleted successfully !!'); navigation.navigate('NewUserLandingScreen') }},
          ],
          { cancelable: false }
        )
    }

    return (
        <View>
            <View style={{height:hp(30),alignItems:'center',justifyContent:'center'}}>
                <Image source={require('./Images/Banarsi.jpg')} style={{height:hp(30),width:wp(100),resizeMode:'cover'}}/>
                <View style={{position:'absolute'}}>
                    <Text style={{color:'white',fontSize:hp(4),fontWeight:'bold'}}>Chitra Fashion Store</Text>
                    <Text style={{color:'white',fontSize:hp(2)}}>Contact : 9637412850</Text>
                    <Text style={{color:'white',fontSize:hp(2)}}>Address : 4-41,opp. SBI, Chandole,Guntur District, AP -522311</Text>
                </View>
            </View>
            <View style={{marginTop:hp(3)}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity style={{height:hp(10),width:wp(45),alignItems:'center',justifyContent:'center',backgroundColor:'black',borderRadius:hp(4.2)}} onPress={() => navigation.navigate('AddProduct')}>
                        <Text style={{color:'white'}}>Add Product</Text>
                    </TouchableOpacity>
                    <View style={{width:wp(3),height:hp(10)}} />
                    <TouchableOpacity style={{height:hp(10),width:wp(45),alignItems:'center',justifyContent:'center',backgroundColor:'black',borderRadius:hp(4.2)}} onPress={()=>navigation.navigate('DelEditProduct')}>
                        <Text style={{color:'white'}}>Delete/Edit Product</Text>
                    </TouchableOpacity>
                </View>
            </View>
                  
            <View style={{marginTop:hp(3)}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity style={{height:hp(10),width:wp(45),alignItems:'center',justifyContent:'center',backgroundColor:'black',borderRadius:hp(4.2)}} onPress={()=>navigation.navigate('EditStore')}>
                        <Text style={{color:'white'}}>Edit Store</Text>
                    </TouchableOpacity>
                    <View style={{width:wp(3),height:hp(10)}} />
                    <TouchableOpacity style={{height:hp(10),width:wp(45),alignItems:'center',justifyContent:'center',backgroundColor:'black',borderRadius:hp(4.2)}} onPress={()=>delStore()}>
                        <Text style={{color:'white'}}>Delete Store</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}
export default ManageExistingStore;