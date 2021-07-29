import React,{useState} from 'react';
import {View,Text,TouchableOpacity,ScrollView,Image} from 'react-native';
import {TouchableRipple,Card} from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

function SearchWatchesMen({navigation}) {

    const screen_width = wp(100);
    const [selected,setSelected] = useState(0);

    return (
        <View style={{}}>
            <View style={{flexDirection:'row',width:wp(100),height:hp(10)}}>
                <Text style={{fontWeight:'bold',fontSize:hp(2.5),marginLeft:wp(3),marginTop:hp(2)}}>Watches For Men</Text>
                <AntDesign name="shoppingcart" size={hp(4)} style={{position:'absolute',right:wp(3),marginTop:hp(2)}}/>
            </View>
            <ScrollView>
                  <View style={{}}>
                      <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <TouchableRipple onPress={()=> {console.log('Sai Balaji watch selected'); setSelected(!selected)}}>
                                    <Card style={{width:wp(48),height:hp(40),alignItems:'center',justifyContent:'center',shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 30,}}>
                                        <View style={{height:hp(14),width:wp(48)}}>
                                            <Card.Content>
                                                <Image source={require('./Images/watch1.jpg')} style={{height:hp(14),width:wp(48),resizeMode:'contain',alignSelf:'center'}}/>
                                            </Card.Content>
                                            {
                                                selected == 1 ? (
                                                   <AntDesign name="shoppingcart" size={hp(3.5)} style={{position:'absolute',right:wp(2),marginTop:hp(1),color:'red'}}/> 
                                                ) :
                                                (
                                                    <FontAwesome name="shopping-cart" size={hp(3.5)} style={{position:'absolute',right:wp(2),marginTop:hp(1),color:'red'}}/>
                                                )
                                            }
                                            
                                        </View>

                                        <Card.Actions style={{}}>
                                            <TouchableOpacity onPress={()=>navigation.navigate('DisplayProduct')}>
                                                 <Text style={{height:hp(12),fontSize:hp(2.1)}}>Analogue Black Dial Men's Watch (Black Dial Brown Colored Strap)</Text>
                                                 <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(1)}}>
                                                      <FontAwesome name="rupee" size={hp(2.5)} />
                                                      <Text style={{fontSize:hp(2),fontWeight:'bold'}}> 1199</Text>
                                                 </View>
                                                 <Text style={{marginTop:hp(1),fontWeight:'bold'}}>Sai Balaji Watch Store</Text>
                                                 <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(1)}}>
                                                      <Text style={{fontSize:hp(2),fontWeight:'bold'}}> 4.2</Text>
                                                      <Entypo name="star" size={hp(2.5)} style={{marginLeft:wp(1)}} />
                                                 </View>
                                            </TouchableOpacity>
                                            
                                        </Card.Actions>     
                                    </Card>
                                </TouchableRipple>
                                <View style={{width:wp(1),height:hp(19.6)}}/>
                                <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                                    <Card style={{width:wp(48),height:hp(40),alignItems:'center',justifyContent:'center',shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 30,}}>
                                        <View style={{height:hp(14),width:wp(48)}}>
                                            <Card.Content>
                                                <Image source={require('./Images/Quartz1.jpeg')} style={{height:hp(14),width:wp(48),resizeMode:'contain',alignSelf:'center'}}/>
                                            </Card.Content>
                                            <AntDesign name="shoppingcart" size={hp(3.5)} style={{position:'absolute',right:wp(2),marginTop:hp(1),color:'red'}}/>
                                        </View>
                                        {/* <Card.Cover source={require('./Images/Sarees.jpg')} style={{height:100,width:wp(48),resizeMode:'contain',alignSelf:'center'}}/> */}
                                        <Card.Actions style={{}}>
                                            <TouchableOpacity>
                                                 <Text style={{height:hp(12),fontSize:hp(2.1)}}>Quartz Analog Black Dial Men's Watch-BI5098-58E</Text>
                                                 <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(1)}}>
                                                      <FontAwesome name="rupee" size={hp(2.5)} />
                                                      <Text style={{fontSize:hp(2),fontWeight:'bold'}}> 3500</Text>
                                                 </View>
                                                 <Text style={{marginTop:hp(1),fontWeight:'bold'}}>Manoja Watch Store</Text>
                                                 <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(1)}}>
                                                      <Text style={{fontSize:hp(2),fontWeight:'bold'}}> 3.5</Text>
                                                      <Entypo name="star" size={hp(2.5)} style={{marginLeft:wp(1)}} />
                                                 </View>
                                            </TouchableOpacity>
                                            
                                        </Card.Actions>     
                                    </Card>
                                </TouchableRipple>
                            </View>
                      </View>

                     <View style={{flexDirection:'row',marginTop:hp(2)}}>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                                    <Card style={{width:wp(48),height:hp(40),alignItems:'center',justifyContent:'center',shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 30,}}>
                                        <View style={{height:hp(14),width:wp(48)}}>
                                            <Card.Content>
                                                <Image source={require('./Images/fossil1.jpg')} style={{height:hp(14),width:wp(48),resizeMode:'contain',alignSelf:'center'}}/>
                                            </Card.Content>
                                            <AntDesign name="shoppingcart" size={hp(3.5)} style={{position:'absolute',right:wp(2),marginTop:hp(1),color:'red'}}/>
                                        </View>
                                        {/* <Card.Cover source={require('./Images/Sarees.jpg')} style={{height:100,width:wp(48),resizeMode:'contain',alignSelf:'center'}}/> */}
                                        <Card.Actions style={{}}>
                                            <TouchableOpacity>
                                                 <Text style={{height:hp(12),fontSize:hp(2.1)}}>Analog Blue Men Watch FS5237</Text>
                                                 <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(1)}}>
                                                      <FontAwesome name="rupee" size={hp(2.5)} />
                                                      <Text style={{fontSize:hp(2),fontWeight:'bold'}}> 11999</Text>
                                                 </View>
                                                 <Text style={{marginTop:hp(1),fontWeight:'bold'}}>Deepa Fossil Stores</Text>
                                                 <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(1)}}>
                                                      <Text style={{fontSize:hp(2),fontWeight:'bold'}}> 4.6</Text>
                                                      <Entypo name="star" size={hp(2.5)} style={{marginLeft:wp(1)}} />
                                                 </View>
                                            </TouchableOpacity>
                                            
                                        </Card.Actions>     
                                    </Card>
                                </TouchableRipple>
                                <View style={{width:wp(1),height:hp(19.6)}}/>
                                <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                                    <Card style={{width:wp(48),height:hp(40),alignItems:'center',justifyContent:'center',shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 30,}}>
                                        <View style={{height:hp(14),width:wp(48)}}>
                                            <Card.Content>
                                                <Image source={require('./Images/watch5.webp')} style={{height:hp(14),width:wp(48),resizeMode:'contain',alignSelf:'center'}}/>
                                            </Card.Content>
                                            <AntDesign name="shoppingcart" size={hp(3.5)} style={{position:'absolute',right:wp(2),marginTop:hp(1),color:'red'}}/>
                                        </View>
                                        {/* <Card.Cover source={require('./Images/Sarees.jpg')} style={{height:100,width:wp(48),resizeMode:'contain',alignSelf:'center'}}/> */}
                                        <Card.Actions style={{}}>
                                            <TouchableOpacity>
                                                 <Text style={{height:hp(12),fontSize:hp(2.1)}}>Quartz Analog Black Dial Men's Watch-BI5098-58E</Text>
                                                 <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(1)}}>
                                                      <FontAwesome name="rupee" size={hp(2.5)} />
                                                      <Text style={{fontSize:hp(2),fontWeight:'bold'}}> 7499</Text>
                                                 </View>
                                                 <Text style={{marginTop:hp(1),fontWeight:'bold'}}>Go Pro Watch Store</Text>
                                                 <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(1)}}>
                                                      <Text style={{fontSize:hp(2),fontWeight:'bold'}}> 4.1</Text>
                                                      <Entypo name="star" size={hp(2.5)} style={{marginLeft:wp(1)}} />
                                                 </View>
                                            </TouchableOpacity>
                                            
                                        </Card.Actions>     
                                    </Card>
                                </TouchableRipple>
                            </View>
                      </View>

                      <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                                <TouchableRipple onPress={()=> {console.log('Vikram watch selected'); setSelected(!selected)}}>
                                    <Card style={{width:wp(48),height:hp(40),alignItems:'center',justifyContent:'center',shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 30,}}>
                                        <View style={{height:hp(14),width:wp(48)}}>
                                            <Card.Content>
                                                <Image source={require('./Images/fossil2.jpg')} style={{height:hp(14),width:wp(48),resizeMode:'contain',alignSelf:'center'}}/>
                                            </Card.Content>
                                            {
                                                selected == 1 ? (
                                                    <AntDesign name="shoppingcart" size={hp(3.5)} style={{position:'absolute',right:wp(2),marginTop:hp(1),color:'red'}}/>
                                                ) :
                                                (
                                                    <AntDesign name="shoppingcart" size={hp(3.5)} style={{position:'absolute',right:wp(2),marginTop:hp(1),color:'blue'}}/>
                                                )
                                            }
                                            
                                        </View>
                                        {/* <Card.Cover source={require('./Images/Sarees.jpg')} style={{height:100,width:wp(48),resizeMode:'contain',alignSelf:'center'}}/> */}
                                        <Card.Actions style={{}}>
                                            <TouchableOpacity>
                                                 <Text style={{height:hp(12),fontSize:hp(2.1)}}>Swiss True High Tech Analogue Ceramic Watch For Men Black Dial</Text>
                                                 <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(1)}}>
                                                      <FontAwesome name="rupee" size={hp(2.5)} />
                                                      <Text style={{fontSize:hp(2),fontWeight:'bold'}}> 15999</Text>
                                                 </View>
                                                 <Text style={{marginTop:hp(1),fontWeight:'bold'}}>Vikram Titan Store</Text>
                                                 <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(1)}}>
                                                      <Text style={{fontSize:hp(2),fontWeight:'bold'}}> 4.2</Text>
                                                      <Entypo name="star" size={hp(2.5)} style={{marginLeft:wp(1)}} />
                                                 </View>
                                            </TouchableOpacity>
                                            
                                        </Card.Actions>     
                                    </Card>
                                </TouchableRipple>
                                <View style={{width:wp(1),height:hp(19.6)}}/>
                                <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                                    <Card style={{width:wp(48),height:hp(40),alignItems:'center',justifyContent:'center',shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 30,}}>
                                        <View style={{height:hp(14),width:wp(48)}}>
                                            <Card.Content>
                                                <Image source={require('./Images/Watch.webp')} style={{height:hp(14),width:wp(48),resizeMode:'contain',alignSelf:'center'}}/>
                                            </Card.Content>
                                            <AntDesign name="shoppingcart" size={hp(3.5)} style={{position:'absolute',right:wp(2),marginTop:hp(1),color:'red'}}/>
                                        </View>
                                        {/* <Card.Cover source={require('./Images/Sarees.jpg')} style={{height:100,width:wp(48),resizeMode:'contain',alignSelf:'center'}}/> */}
                                        <Card.Actions style={{}}>
                                            <TouchableOpacity>
                                                 <Text style={{height:hp(12),fontSize:hp(2.1)}}>Analogue Men's Watch-CUR35</Text>
                                                 <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(1)}}>
                                                      <FontAwesome name="rupee" size={hp(2.5)} />
                                                      <Text style={{fontSize:hp(2),fontWeight:'bold'}}> 20000</Text>
                                                 </View>
                                                 <Text style={{marginTop:hp(1),fontWeight:'bold'}}>Priya Fossil Store</Text>
                                                 <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(1)}}>
                                                      <Text style={{fontSize:hp(2),fontWeight:'bold'}}>3.9 </Text>
                                                      <Entypo name="star" size={hp(2.5)} style={{marginLeft:wp(1)}} />
                                                 </View>
                                            </TouchableOpacity>
                                            
                                        </Card.Actions>     
                                    </Card>
                                </TouchableRipple>
                            </View>
                      </View>
                      <View style={{height:hp(10)}}/>
                  </View>
            </ScrollView>
        </View>
    );
};
export default SearchWatchesMen;