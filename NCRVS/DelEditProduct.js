import React from 'react';
import {View,Text,TouchableOpacity,Alert} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TextInput} from 'react-native-paper';

function DelEditProduct({navigation}) {

    const delProduct = () => {
        Alert.alert(
          '',
          'Confirm Product Deletion ?',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
            {text: 'OK', onPress: () => { Alert.alert('','Your product deleted successfully !!'); navigation.navigate('MainTabScreen') }},
          ],
          { cancelable: false }
        )
    };

    return (
      <View style={{ flex: 1,alignItems:'center'}}>
            <TextInput style={{height:hp(8),marginTop:hp(7),width:wp(85)}}
                label="Enter the Product Code"
            
                type="flat"
                onChangeText={withdrawlAmount => setWithdrawlAmount(withdrawlAmount)}      
            />
          <View style={{height:hp(20),alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
              <TouchableOpacity style={{height:hp(6),width:wp(45),borderRadius:hp(4.2),backgroundColor:'#000',alignItems:'center',justifyContent:'center',marginTop:hp(-3)}} ><Text style={{color:'white'}}>Edit Product</Text></TouchableOpacity>
              <View style={{width:wp(4)}}/>
              <TouchableOpacity style={{height:hp(6),width:wp(45),borderRadius:hp(4.2),backgroundColor:'#000',alignItems:'center',justifyContent:'center',marginTop:hp(-3)}} ><Text style={{color:'white'}} onPress={()=>delProduct()}>Delete Product</Text></TouchableOpacity>
          </View> 
      </View>
    )
}
export default DelEditProduct;