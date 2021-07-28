import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TextInput} from 'react-native-paper';

function AddProductCategory({navigation}) {

    return (
      <View style={{ flex: 1,alignItems:'center'}}>
            <TextInput style={{height:hp(8),marginTop:hp(7),width:wp(85)}}
                label="Category Name"
            
                type="flat"
                onChangeText={withdrawlAmount => setWithdrawlAmount(withdrawlAmount)}      
            />
          <View style={{height:hp(20),alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity style={{height:hp(6),width:wp(90),borderRadius:hp(4.2),backgroundColor:'#000',alignItems:'center',justifyContent:'center',marginTop:hp(2)}} onPress={()=> withdrawMoney()}><Text style={{color:'white'}}>Add Category to Store</Text></TouchableOpacity>
          </View> 
          <Text style={{fontSize:wp(4)}}> Note: This Category will only be displayed in your store if there is atleast one item added from this category.</Text>
      </View>
    )
}
export default AddProductCategory;