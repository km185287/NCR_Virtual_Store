import React,{useState} from 'react';
import {Text,SafeAreaView,ScrollView,StatusBar,View,Dimensions,TouchableOpacity,Image,Alert} from 'react-native';
import {Card, TouchableRipple, Title} from 'react-native-paper';
import {SearchBar} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function DisplayStore({navigation}) {

    const screen_width = wp(100);
    return (
        <SafeAreaView>
            <ScrollView>
                    <View style={{}}>
                        <View style={{borderBottomColor: '#a9a9a9', borderBottomWidth: 1,marginTop:hp(4)}}/>
                        <View style={{height:hp(5),alignItems:'center',justifyContent:'center',borderRadius:hp(3),borderColor:'#a9a9a9',borderWidth:hp(0.2),margin:hp(0.5)}}>
                            <Text style={{fontWeight:'bold',textAlign:'center',fontSize:hp(2.5)}}>My Store</Text>                    
                        </View>
                        <View style={{borderBottomColor: '#a9a9a9', borderBottomWidth: 1}}/>
                        <View style={{flexDirection:'row'}}>
                            <View style={{marginTop:hp(2)}}>
                                <Text style={{fontWeight:'bold',fontSize:hp(2.2),marginLeft:wp(3)}}>Sarees</Text>

                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Kancheevaram-S001</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Nauvari-S002</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Bandhani-S003</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                    </View>

                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(1)}}>
                                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Tant-S004</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Banarsi-S005</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Chikankari-S006</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                    </View>

                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(1)}}>
                                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Kasavu-S007</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Pochampally-S008</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Phulkari-S009</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                    </View>
                                </View>        
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>
                            <View style={{marginTop:hp(2)}}>
                                <Text style={{fontWeight:'bold',fontSize:hp(2.2),marginLeft:wp(3)}}>Beauty Products</Text>
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
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Primer -B001</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>BB Cream -B002</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Foundation -B003</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                    </View>

                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Eye Liner -B004</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Blush-B005</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Lipstick -B006</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                    </View>

                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Kajal -B007</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Eye Shadow -B008</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Maskara -B009</Text></TouchableOpacity>
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

export default DisplayStore;