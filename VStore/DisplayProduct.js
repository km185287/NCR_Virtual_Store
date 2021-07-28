import React from 'react';
import {View,Text,TouchableOpacity,Image,ScrollView,SafeAreaView,StatusBar,Alert} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Card,TouchableRipple} from 'react-native-paper';

//icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

function DisplayProduct({navigation}) {

    return (
        <SafeAreaView>
        <ScrollView>
            <StatusBar  
                backgroundColor = "#b3e6ff"  
                barStyle = "dark-content"   
                hidden = {false}    
                translucent = {false}  
            /> 
        <View style={{}}>
            <View style={{height:hp(30)}}>
                <Image source={require('./Images/watch1.jpg')} style={{height:hp(30),width:wp(100)}}/>
            </View>
            <View style={{}}>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(1),marginTop:hp(2),alignItems:'center',justifyContent:'center'}}>
                    <FontAwesome name="rupee" size={hp(3.5)} />
                    <Text style={{fontSize:hp(3.5),fontWeight:'bold'}}> 1199</Text>
                </View>
                <View style={{borderWidth:hp(0.1),marginTop:hp(1),borderColor:'grey'}}/>
                <Text style={{fontSize:hp(2.2),marginTop:hp(2)}}>Analogue Black Dial Men's Watch (Black Dial Brown Colored Strap)</Text>
                <View style={{flexDirection:'row',marginTop:hp(1)}}>
                    <Text>Product Rating :</Text>
                    <View style={{flexDirection:'row',position:'absolute',right:wp(3)}}>
                        <Text>4.2</Text>
                        <Entypo name="star" size={hp(2.5)} style={{marginLeft:wp(1)}} />
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop:hp(1)}}>
                    <Text>Manufacturer :</Text>
                    <Text style={{position:'absolute',right:wp(3)}}>Sai Balaji Watch Store</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:hp(1)}}>
                    <Text>Manufacturer Trusto Meter :</Text>
                    <View style={{flexDirection:'row',position:'absolute',right:wp(3)}}>
                        <Text>4.6</Text>
                        <Entypo name="star" size={hp(2.5)} style={{marginLeft:wp(1)}} />
                    </View>
                </View>
                <View style={{}}>
                    <Text style={{fontWeight:'bold',fontSize:hp(2.2),marginTop:hp(2)}}>Product Details</Text>
                    <View style={{marginTop:hp(1)}}>
                        <Text>Strap Material :</Text>
                        <Text style={{position:'absolute',right:wp(3)}}>Stainless Steel</Text>
                    </View>
                    <View style={{marginTop:hp(1)}}>
                        <Text>Display Type:</Text>
                        <Text style={{position:'absolute',right:wp(3)}}>Analogue</Text>
                    </View>
                    <View style={{marginTop:hp(1)}}>
                        <Text>Size:</Text>
                        <Text style={{position:'absolute',right:wp(3)}}>Free Size</Text>
                    </View>
                    <View style={{marginTop:hp(1)}}>
                        <Text>Multipack:</Text>
                        <Text style={{position:'absolute',right:wp(3)}}>1</Text>
                    </View>
                    <View style={{marginTop:hp(1)}}>
                        <Text>Country of Manufacturer:</Text>
                        <Text style={{position:'absolute',right:wp(3)}}>India</Text>
                    </View>
                </View>
                <View style={{}}>
                    <Text style={{fontWeight:'bold',fontSize:hp(2.2),marginTop:hp(2)}}>Other Products from this Manufacturer</Text>
                    <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        style={{marginTop:hp(2)}}
                    >
                        <TouchableRipple onPress={()=>{navigation.navigate('blocks')}}>
                            <Card style={{alignItems:'center',justifyContent:'center',height:hp(25),width:wp(35),borderColor:'black',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,shadowRadius: 5,elevation: 20,}}>
                                <Card.Content>
                                    <Image source={require('./Images/Quartz1.jpeg')} style={{height:hp(13),width:wp(35),resizeMode:'contain',alignSelf:'center'}}/>
                                </Card.Content> 
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text>Quartz Analog Black Dial Men's Watch-BI5098-58E</Text>
                                </Card.Actions>
                            </Card>
                        </TouchableRipple>
                        <TouchableRipple onPress={()=>{navigation.navigate('blocks')}}>
                            <Card style={{alignItems:'center',justifyContent:'center',height:hp(25),width:wp(35),borderColor:'black',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,shadowRadius: 5,elevation: 20,}}>
                                <Card.Content> 
                                    <Image source={require('./Images/fossil1.jpg')} style={{height:hp(15),width:wp(35),resizeMode:'cover',alignSelf:'center'}}/>
                                </Card.Content> 
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text>Analog Blue Men Watch FS5237</Text>
                                </Card.Actions>
                            </Card>
                        </TouchableRipple>
                        <TouchableRipple onPress={()=>{navigation.navigate('blocks')}}>
                            <Card style={{alignItems:'center',justifyContent:'center',height:hp(25),width:wp(35),borderColor:'black',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,shadowRadius: 5,elevation: 20,}}>
                                <Card.Content>
                                    <Image source={require('./Images/watch5.webp')} style={{height:hp(13),width:wp(35),resizeMode:'cover',alignSelf:'center'}}/>
                                </Card.Content> 
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text>Quartz Analog Black Dial Men's Watch-BI5098-58E</Text>
                                </Card.Actions>
                            </Card>
                        </TouchableRipple>
                        <TouchableRipple onPress={()=>{navigation.navigate('blocks')}}>
                            <Card style={{alignItems:'center',justifyContent:'center',height:hp(25),width:wp(35),borderColor:'black',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,shadowRadius: 5,elevation: 20,}}>
                                <Card.Cover source={require('./Images/fossil2.jpg')} style={{height:hp(15),width:wp(35),resizeMode:'cover',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text>Swiss True High Tech Analogue Ceramic Watch For Men Black</Text>
                                </Card.Actions>
                            </Card>
                        </TouchableRipple>
                        <TouchableRipple onPress={()=>{navigation.navigate('blocks')}}>
                            <Card style={{alignItems:'center',justifyContent:'center',height:hp(25),width:wp(35),borderColor:'black',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,shadowRadius: 5,elevation: 20,}}>
                                <Card.Cover source={require('./Images/Watch.webp')} style={{height:hp(16),width:wp(35),resizeMode:'cover',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text>Analogue Men's Watch-CUR35</Text>
                                </Card.Actions>
                            </Card>
                        </TouchableRipple>
                    </ScrollView>
                    
                </View>
                <View style={{borderWidth:hp(0.1),borderColor:'grey',marginTop:hp(2)}}/>
                <TouchableOpacity style={{height:hp(5),width:wp(100),marginTop:hp(2)}} onPress={()=>navigation.navigate('DisplayVStore')}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontWeight:'bold',fontSize:hp(2.2),marginLeft:wp(3)}}>Sai Balaji Watch Store</Text>
                        <View style={{flexDirection:'row',marginLeft:wp(2)}}>
                            <Text>(4.2</Text>
                            <Entypo name="star" size={hp(2.5)} style={{marginLeft:wp(1)}}/>
                            <Text>)</Text>
                        </View>
                        <AntDesign name="right" size={hp(2.5)} style={{position:'absolute',right:wp(3)}}/>
                    </View>
                </TouchableOpacity>
                <View style={{borderWidth:hp(0.1),borderColor:'grey'}}/>
            </View>
            <View style={{marginTop:hp(2),marginLeft:wp(2)}}>
                <Text style={{fontWeight:'bold',fontSize:hp(2.2)}}>Product Reviews</Text>
                <View style={{}}>
                    <View style={{flexDirection:'row',marginTop:hp(2),alignItems:'center'}}>
                        <Text style={{fontSize:hp(2.2)}}>Manoj Kumar</Text>
                            <Entypo name="star" size={hp(2)} style={{marginLeft:wp(3)}}/>
                            <Entypo name="star" size={hp(2)} />
                            <Entypo name="star" size={hp(2)} />
                            <Entypo name="star" size={hp(2)} />
                            <Entypo name="star" size={hp(2)} />
                    </View>
                    <Text style={{marginTop:hp(1)}}>Excellent Product, durable and quality of packing is good. I really recommend this shop for good products.</Text>
                    <View style={{borderWidth:hp(0.1),borderColor:'grey',marginTop:hp(1)}}/>
                </View>
                <View style={{}}>
                    <View style={{flexDirection:'row',marginTop:hp(2),alignItems:'center'}}>
                        <Text style={{fontSize:hp(2.2)}}>Meghana</Text>
                            <FontAwesome name="star" size={hp(2)} style={{marginLeft:wp(3)}}/>
                            <FontAwesome name="star" size={hp(2)} />
                            <FontAwesome name="star" size={hp(2)} />
                            <FontAwesome name="star-half-full" size={hp(2)} />
                            <FontAwesome name="star-o" size={hp(2)} />
                    </View>
                    <Text style={{marginTop:hp(1)}}>Pros: Value for Money, Nice style, good packaging.</Text>
                    <Text>Cons: Late Delivery, usually the product is delivered after a month of booking.</Text>
                    <View style={{borderWidth:hp(0.1),borderColor:'grey',marginTop:hp(1)}}/>
                </View>
                <View style={{}}>
                    <View style={{flexDirection:'row',marginTop:hp(2),alignItems:'center'}}>
                        <Text style={{fontSize:hp(2.2)}}>Shiva</Text>
                            <FontAwesome name="star" size={hp(2)} style={{marginLeft:wp(3)}}/>
                            <FontAwesome name="star-o" size={hp(2)} />
                            <FontAwesome name="star-o" size={hp(2)} />
                            <FontAwesome name="star-o" size={hp(2)} />
                            <FontAwesome name="star-o" size={hp(2)} />
                    </View>
                    <Text style={{marginTop:hp(1)}}>Worst Product, Don't waste your money on this. I received a damaged product and they are not allowing me to return this.</Text>
                    <View style={{borderWidth:hp(0.1),borderColor:'grey',marginTop:hp(1)}}/>
                </View>
                <View style={{}}>
                    <View style={{flexDirection:'row',marginTop:hp(2),alignItems:'center'}}>
                        <Text style={{fontSize:hp(2.2)}}>Aditya</Text>
                            <FontAwesome name="star" size={hp(2)} style={{marginLeft:wp(3)}}/>
                            <FontAwesome name="star" size={hp(2)} />
                            <FontAwesome name="star" size={hp(2)} />
                            <FontAwesome name="star" size={hp(2)} />
                            <FontAwesome name="star-o" size={hp(2)} />
                    </View>
                    <Text style={{marginTop:hp(1)}}>Nice Product. Value for Money Product</Text>
                    <View style={{borderWidth:hp(0.1),borderColor:'grey',marginTop:hp(1)}}/>
                </View>
            </View>
            <View style={{height:hp(7),width:wp(100),flexDirection:'row',marginTop:hp(3)}}>
                <TouchableOpacity style={{height:hp(7),width:wp(46),backgroundColor:'red',alignItems:'center',justifyContent:'center',borderRadius:wp(5)}}>
                    <Text style={{color:'white'}}>Add a Review</Text>
                </TouchableOpacity>
                <View style={{width:wp(8),height:hp(5)}}/>
                <TouchableOpacity style={{height:hp(7),width:wp(46),backgroundColor:'red',alignItems:'center',justifyContent:'center',borderRadius:wp(5)}} onPress={()=> {
                    Alert.alert('','Added to Cart !!');
                    navigation.navigate('LandingPage');               
                }}>
                    <Text style={{color:'white'}}>Add to Cart</Text>
                </TouchableOpacity>
            </View>

            <View style={{height:hp(5)}} />
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}
export default DisplayProduct;