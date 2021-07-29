import React, {useState} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Card,Title} from 'react-native-paper';

//icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

function ActiveOrders({navigation}) {

    const [selected,setSelected] = useState(0);

    return (
        <View style={{}}>
          <View style={{height:hp(49),marginTop:hp(1.4),width:wp(100),alignItems:'center',justifyContent:'center'}}>
            <Card style={{height:hp(49),borderRadius:hp(0.7)}}>
                <View style={{height:hp(25),width:wp(90)}}>
                   <Card.Cover source={require('./Images/watch1.jpg')} style={{height:hp(25),width:wp(90)}}/>
                   <TouchableOpacity style={{position:'absolute',right:wp(5),marginTop:hp(2)}} onPress={async()=> {}}>
                        <FontAwesome name="shopping-cart" size={hp(4)} color="red"/>
                   </TouchableOpacity>
                </View>
                <Card.Content>
                    <Text style={{fontSize:hp(2.2),marginTop:hp(1)}}>Analogue Black Dial Men's Watch (Black Dial Brown Colored Strap)</Text>
                    <View style={{flexDirection:'row'}}>
                    <View style={{width:wp(60)}}>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(1)}}>
                        <FontAwesome name="rupee" size={hp(3)} />
                        <Text style={{fontSize:hp(2.5),fontWeight:'bold'}}> 1199</Text>
                    </View>
                            <Text style={{marginTop:hp(1),fontWeight:'bold',fontSize:hp(2.2)}}>Sai Balaji Watch Store</Text>
                            <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(1)}}>
                                <Text style={{fontSize:hp(2.2),fontWeight:'bold'}}> 4.2</Text>
                                <Entypo name="star" size={hp(2.5)} style={{marginLeft:wp(1)}} />
                            </View>
                            </View>
                            <View style={{width:wp(30)}}>
                                <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{borderRadius : hp(2),backgroundColor:'red',color:'white',borderColor:'red',padding:hp(1.5)}}>Paid</Text>
                                    <Text style={{marginTop:hp(2),}}>Will be delivered in  2 Days</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                </Card.Content>
            </Card>
          </View>
        </View>
    )
}
export default ActiveOrders;