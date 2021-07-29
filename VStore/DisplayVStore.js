import React, {useState} from 'react';
import {Text,SafeAreaView,ScrollView,StatusBar,View,Dimensions,TouchableOpacity,Image,Alert} from 'react-native';
import {Card, TouchableRipple, Title} from 'react-native-paper';
import {SearchBar} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//icons
import Entypo from 'react-native-vector-icons/Entypo';

export default function DisplayVStore({navigation}) {

    const screen_width = wp(100);
    return (

        <SafeAreaView>
            <ScrollView>
                    <View style={{}}>
                        <View style={{marginTop:hp(3)}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{width:wp(70),fontWeight:'bold',fontSize:hp(2.2),marginLeft:wp(3)}}>Sai Balaji Watch Store</Text>
                                <View style={{flexDirection:'row',position:'absolute',right:wp(2)}}>
                                    <Text>(4.2</Text>
                                    <Entypo name="star" size={hp(2.5)} style={{marginLeft:wp(1)}}/>
                                    <Text>)</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row',marginTop:hp(1),marginLeft:wp(3)}}>
                                <Text style={{fontWeight:'bold'}}>Category:</Text>
                                <Text style={{position:'absolute',right:wp(2)}}>Mobiles, Watches</Text>
                            </View>
                            <Text style={{marginTop:hp(1),marginLeft:wp(3),fontWeight:'bold'}}>Contact:</Text>
                            <Text style={{marginTop:hp(1),marginLeft:wp(3)}}>Balaji.VStore@gmail.com</Text>
                            <Text style={{marginTop:hp(1),marginLeft:wp(3)}}>+91-9658467912</Text>
                        </View>

                        <View style={{borderBottomColor: '#a9a9a9', borderBottomWidth: 1,marginTop:hp(4)}}/>
                        <View style={{height:hp(5),alignItems:'center',justifyContent:'center',borderRadius:hp(3),borderColor:'#a9a9a9',borderWidth:hp(0.2),margin:hp(0.5)}}>
                            <Text style={{fontWeight:'bold',textAlign:'center',fontSize:hp(2.5)}}>Store</Text>                    
                        </View>
                        <View style={{borderBottomColor: '#a9a9a9', borderBottomWidth: 1}}/>
                        <View style={{flexDirection:'row'}}>
                            <View style={{marginTop:hp(2)}}>
                                <Text style={{fontWeight:'bold',fontSize:hp(2.2),marginLeft:wp(3)}}>Watches</Text>

                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(25),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/watch1.jpg')} style={{height:hp(14),width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Analogue Black Dial Men's Watch</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/Quartz1.jpeg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Quartz Analog Black Dial Men's Watch-BI5098-58E</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/fossil1.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Analog Blue Men Watch FS5237</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                    </View>

                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(1)}}>
                                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/watch5.webp')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Quartz Analog Black Dial Men's Watch-BI5098-58E</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(25),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/Watch.webp')} style={{height:hp(14),width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Analogue Men's Watch-CUR35</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(25),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/fossil2.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Swiss True High Tech Analogue Ceramic Watch Black Dial</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                    </View>

                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(1)}}>
                                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(25),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/watch7.jpeg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>2047-WH Day and Date Analog Watch</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(25),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/watch8.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>TW00ZR347 Analog Watch - For Men</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(25),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/watch9.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>LCS-8184 DAY & DATE FUNCTIONING Analog Watch</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                    </View>
                                </View>        
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>
                            <View style={{marginTop:hp(2)}}>
                                <Text style={{fontWeight:'bold',fontSize:hp(2.2),marginLeft:wp(3)}}>Mobile Phones</Text>
                                {/* <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    nestedScrollEnabled={true}
                                    style={{marginTop:hp(1),marginLeft:wp(4)}}
                                >
                                
                                </ScrollView> */}
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    {/* <View style={{height:hp(20),width:wp(45),marginTop:hp(2)}}>
                                        <Image source={require('./Images/kancheevaramSarees.jpg')} style={{height:hp(15),width:wp(45),resizeMode:'cover',alignItems:'center',justifyContent:'center'}} />
                                        <Text style={{alignSelf:'center'}}>kancheevaram</Text> */}
                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(25),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/mobile1.jpg')} style={{height:hp(17),width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Realme C20 (Cool Grey, 32 GB)</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(25),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/mobile2.jpg')} style={{height:hp(17),width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Poco M2 Pro</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(25),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/mobile3.jpg')} style={{height:hp(17),width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Oppo Reno6 Pro 5G</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                    </View>

                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(25),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/mobile4.jpg')} style={{height:hp(17),width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Redmi 9i (Nature Green, 64 GB)</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(25),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/mobile5.jpg')} style={{height:hp(17),width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Realme Narzo 30 5G</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(25),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/mobile6.jpg')} style={{height:hp(17),width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Vivo Y12 S (Racing Black, 128GB)</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                    </View>

                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(25),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/mobile7.jpg')} style={{height:hp(17),width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Realme C21 (Cross Blue, 32 GB)</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(25),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/mobile8.webp')} style={{height:hp(17),width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Vivo Y12 S Pro Max (8 + 128)</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(25),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/mobile9.jpg')} style={{height:hp(17),width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Motorola SG 1 (8 + 128)</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                    </View>

                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(25),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/mobile11.jpg')} style={{height:hp(17),width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>One Plus Flag Edition</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(25),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/mobile10.png')} style={{height:hp(17),width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Iphone 12 Pro </Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(25),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/mobile12.png')} style={{height:hp(17),width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Coolpad Legacy M1</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                    </View>
                                </View>        
                            </View>
                        </View>
                    </View>
            </ScrollView>
        </SafeAreaView>
    );
};