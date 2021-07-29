import React, {useState,useEffect,Component} from 'react';
import {View,Text,TouchableOpacity,ScrollView,StatusBar,SafeAreaView, Image} from 'react-native';
import {Card, TouchableRipple, Title, FAB} from 'react-native-paper';
import {SearchBar} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import useForceUpdate from 'use-force-update';

function LandingPage({navigation}) {

    const screen_width = wp(100);
    return (
      <SafeAreaView>
        <ScrollView>
            <StatusBar  
                        backgroundColor = "#b3e6ff"  
                        barStyle = "dark-content"   
                        hidden = {false}    
                        translucent = {false}  
            /> 
           <View style={{height:hp(8.4),width:wp(100),flexDirection:'row',backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                {/* <TouchableOpacity onPress={()=>navigation.openDrawer()} style={{flex:1}}>
                    <Ionicons name="md-menu" size={30} color="#000000" style={{margin:10}} />
                </TouchableOpacity> */}
                <View style={{flex:8}}>
                   <Text style={{marginLeft:wp(5.6),fontSize:hp(2.8),fontWeight:'bold'}}>Hi Snigdha !!</Text>
                </View>
                {/* <TouchableOpacity style={{flex:1}}>
                     <Entypo name="location" size={hp(3.5)}/>
                </TouchableOpacity> */}
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('AccountStack')} style={{flex:1}}>
                        <Ionicons name="md-person" size={hp(3.5)} color="black" style={{margin:hp(2.8)}} />
                    </TouchableOpacity>
                </View>  
            </View>

            <TouchableOpacity onPress={()=> navigation.navigate('Search',{filterValue:1})}>
                <SearchBar placeholder="Search Products"
                    lightTheme round editable={false}
                    //value={this.state.search}
                    //onChangeText={this.updateSearch} 
                    onPress={()=>{navigation.navigate('Search',{filterValue:'khaja'})}}
                />
            </TouchableOpacity>

                        <View style={{marginTop:10,height:hp(20),backgroundColor:'white'}}>
                   {/* <View>
                         <Text style={{fontWeight:'bold',fontSize:17}}>Food Catering Services</Text>
                    </View> */}
                   <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                   >
                      <TouchableRipple 
                         onPress={()=>{
                             navigation.navigate('taps')
                         }}
                       >
                        <Card style={{alignItems:'center',justifyContent:'center',height:hp(18),width:wp(35),borderColor:'black',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,shadowRadius: 5,elevation: 20,}}>
                            <Card.Cover source={require('./Images/womensFashion.jpg')} style={{height:hp(13),width:wp(35),resizeMode:'cover',alignSelf:'center'}}/>
                            <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                  <Text>Women's Fashion</Text>
                            </Card.Actions>
                        </Card>
                      </TouchableRipple>
                      <TouchableRipple onPress={()=>{navigation.navigate('blocks')}}>
                        <Card style={{alignItems:'center',justifyContent:'center',height:hp(18),width:wp(35),borderColor:'black',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,shadowRadius: 5,elevation: 20,}}>
                            <Card.Cover source={require('./Images/beauty.jpg')} style={{height:hp(13),width:wp(35),resizeMode:'cover',alignSelf:'center'}}/>
                            <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                  <Text>Beauty</Text>
                            </Card.Actions>
                        </Card>
                      </TouchableRipple>
                      <TouchableRipple onPress={()=>{navigation.navigate('toiletSanitory')}}>
                        <Card style={{alignItems:'center',justifyContent:'center',height:hp(18),width:wp(35),borderColor:'black',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,shadowRadius: 5,elevation: 20,}}>
                            <Card.Cover source={require('./Images/kidsFashion.jpg')} style={{height:hp(13),width:wp(35),resizeMode:'cover',alignSelf:'center'}}/>
                            <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                  <Text>Kids</Text>
                            </Card.Actions>
                        </Card>
                      </TouchableRipple>
                      <TouchableRipple onPress={()=>{navigation.navigate('blocks')}}>
                        <Card style={{alignItems:'center',justifyContent:'center',height:hp(18),width:wp(35),borderColor:'black',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,shadowRadius: 5,elevation: 20,}}>
                            <Card.Cover source={require('./Images/Furnishings.jpg')} style={{height:hp(13),width:wp(35),resizeMode:'contain',alignSelf:'center'}}/>
                            <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                  <Text>Furnishing</Text>
                            </Card.Actions>
                        </Card>
                      </TouchableRipple>
                      <TouchableRipple onPress={()=>{console.log('home ac')}}>
                        <Card style={{alignItems:'center',justifyContent:'center',height:hp(18),width:wp(35),borderColor:'black',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,shadowRadius: 5,elevation: 20,}}>
                            <Card.Cover source={require('./Images/Kitchen.jpg')} style={{height:hp(13),width:wp(35),resizeMode:'cover',alignSelf:'center'}}/>
                            <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                  <Text>Kitchen</Text>
                            </Card.Actions>
                        </Card>
                      </TouchableRipple>
                      <TouchableRipple onPress={()=>{console.log('home ac')}}>
                        <Card style={{alignItems:'center',justifyContent:'center',height:hp(18),width:wp(35),borderColor:'black',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,shadowRadius: 5,elevation: 20,}}>
                            <Card.Cover source={require('./Images/Decor.jpg')} style={{height:hp(13),width:wp(35),resizeMode:'cover',alignSelf:'center'}}/>
                            <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                  <Text>Decor</Text>
                            </Card.Actions>
                        </Card>
                      </TouchableRipple>
                      <TouchableRipple onPress={()=>{console.log('home ac')}}>
                        <Card style={{alignItems:'center',justifyContent:'center',height:hp(18),width:wp(35),borderColor:'black',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,shadowRadius: 5,elevation: 20,}}>
                            <Card.Cover source={require('./Images/HealthProducts.jpg')} style={{height:hp(13),width:wp(35),resizeMode:'cover',alignSelf:'center'}}/>
                            <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                  <Text>Health</Text>
                            </Card.Actions>
                        </Card>
                      </TouchableRipple>
                      <TouchableRipple onPress={()=>{console.log('home ac')}}>
                        <Card style={{alignItems:'center',justifyContent:'center',height:hp(18),width:wp(35),borderColor:'black',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,shadowRadius: 5,elevation: 20,}}>
                            <Card.Cover source={require('./Images/Jewellery.jpg')} style={{height:hp(13),width:wp(35),resizeMode:'cover',alignSelf:'center'}}/>
                            <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                  <Text>Jewellery</Text>
                            </Card.Actions>
                        </Card>
                      </TouchableRipple>
                      <TouchableRipple onPress={()=>{console.log('home ac')}}>
                        <Card style={{alignItems:'center',justifyContent:'center',height:hp(18),width:wp(35),borderColor:'black',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,shadowRadius: 5,elevation: 20,}}>
                            <Card.Cover source={require('./Images/Accessories.jpg')} style={{height:hp(13),width:wp(35),resizeMode:'cover',alignSelf:'center'}}/>
                            <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                  <Text>Accessories</Text>
                            </Card.Actions>
                        </Card>
                      </TouchableRipple>
                      <TouchableRipple onPress={()=>{console.log('home ac')}}>
                        <Card style={{alignItems:'center',justifyContent:'center',height:hp(18),width:wp(35),borderColor:'black',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,shadowRadius: 5,elevation: 20,}}>
                            <Card.Cover source={require('./Images/BagFootwear.jpg')} style={{height:hp(13),width:wp(35),resizeMode:'cover',alignSelf:'center'}}/>
                            <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                  <Text>Bag & Footwear</Text>
                            </Card.Actions>
                        </Card>
                      </TouchableRipple>
                      <TouchableRipple onPress={()=>{console.log('home ac')}}>
                        <Card style={{alignItems:'center',justifyContent:'center',height:hp(18),width:wp(35),borderColor:'black',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,shadowRadius: 5,elevation: 20,}}>
                            <Card.Cover source={require('./Images/Electronics.png')} style={{height:hp(13),width:wp(35),resizeMode:'cover',alignSelf:'center'}}/>
                            <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                  <Text>Electronics</Text>
                            </Card.Actions>
                        </Card>
                      </TouchableRipple>
                      <TouchableRipple onPress={()=>{console.log('home ac')}}>
                        <Card style={{alignItems:'center',justifyContent:'center',height:hp(18),width:wp(35),borderColor:'black',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,shadowRadius: 5,elevation: 20,}}>
                            <Card.Cover source={require('./Images/Fitness.jpg')} style={{height:hp(13),width:wp(35),resizeMode:'cover',alignSelf:'center'}}/>
                            <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                  <Text>Sports & Fitness</Text>
                            </Card.Actions>
                        </Card>
                      </TouchableRipple>
                   </ScrollView>
            </View>
            <Image source={require('./Images/SummerSale.webp')} style={{width:wp(100),height:hp(20),resizeMode:'cover',marginTop:hp(2)}}/>
            <View style={{marginTop:hp(2)}}>
                <Text style={{fontWeight:'bold',fontSize:hp(2.3)}}>Popular Categories </Text>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/Sarees.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Sarees</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/Kurtis.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Kurtis</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/WesternWear.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Western Wear</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                    </View>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/Mens.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Men</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/Accessories.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Accessories</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/SportsShoes.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Shoes</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                    </View>           
            </View>
            <View style={{marginTop:hp(2)}}>
                <Text style={{fontWeight:'bold',fontSize:hp(2.3)}}>Accessories</Text>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected'); navigation.navigate('SearchWatchesMen');}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/Watch.webp')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Watches</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/Sunglasses.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Sunglasses</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/Jewellery.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Jewellery</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                    </View>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/Wallet.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Wallets</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/Bags.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Bags</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                        {/* <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/SportsShoes.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Shoes</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple> */}
                        <View style={{width:screen_width/3-10,height:hp(19.6)}}/>

                    </View>           
            </View>
            <View style={{marginTop:hp(2)}}>
                <Text style={{fontWeight:'bold',fontSize:hp(2.3)}}>Foot Wear</Text>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/SportsShoes.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Sports Shoes</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/Formals.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Formals & Casuals</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/sandalsChappals.jpeg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Sandals & Chappals</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                    </View>          
            </View>
            <View style={{marginTop:hp(2)}}>
                <Text style={{fontWeight:'bold',fontSize:hp(2.3)}}>Baby Care</Text>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/InfantBed.webp')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Infant Beds</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/diaper.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Diapers</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/newborn.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>NewBorn Products</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                    </View>          
            </View>

            <View style={{marginTop:hp(2)}}>
                <Text style={{fontWeight:'bold',fontSize:hp(2.3)}}>Appliances </Text>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/ac_mc1.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>AC</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/fridgemc1.png')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Fridge</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/washingmc1.png')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Washing Machines</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                    </View> 
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/Tv_mc1.png')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>TV</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/cooler1.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Coolers</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/fans.png')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Fans</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                    </View>          
            </View>

           <View style={{marginTop:hp(2)}}>
                <Text style={{fontWeight:'bold',fontSize:hp(2.3)}}>Fitness</Text>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/HandGrippers.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Hand Grippers</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/ExerciseBands.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Excercise Bands</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/SweatBelt.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Sweat Belts</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                    </View>        
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/WheelRollers.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Ab Wheel Roller</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/SkippingRopes.jpeg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Skipping Rope</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                <Card.Cover source={require('./Images/TummyTrimmer.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{fontSize:13}}>Tummy Trimmers</Text></TouchableOpacity>
                                </Card.Actions>     
                            </Card>
                        </TouchableRipple>

                    </View>      
            </View>
        </ScrollView>
      </SafeAreaView>
    )
}
export default LandingPage;