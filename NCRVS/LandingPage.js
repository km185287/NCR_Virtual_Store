import React, {useState} from 'react';
import {Text,SafeAreaView,ScrollView,StatusBar,View,Dimensions,TouchableOpacity,Image,Alert} from 'react-native';
import {Card, TouchableRipple, Title} from 'react-native-paper';
import {SearchBar} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Share from 'react-native-share';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import CreateStoreStack from './CreateStoreStack';

function LandingPage({navigation}) {

    const screen_width=Dimensions.get('window').width;
    const sw=0.8*screen_width;
    const [userName,setUserName]=useState('');
    const [mobile,setMobile]=useState(0);
    const [change,setChange]=useState(0);
    const [recentSearch,setRecent]=useState([]);

    const shareApp = async () => {

        //console.log(url);
        const shareOptions = {
        message: 'All Home services at your finger tips at lowest prices. Enjoy our services at https://play.google.com/store/apps/details?id=com.taskiboonpublishers.taskitexttemplatesvault_storeretrieveandschedulemessagetemplates&hl=en',
        //url: "file://R:/ReactNativeProjects/helloWorld/Images/cleaning1.jpg",
        // urls: [files.image1, files.image2]
        //url : url,
        url: 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en'
        }

        try {
        const ShareResponse = await Share.open(shareOptions);
        console.log(JSON.stringify(ShareResponse));
        } catch(error) {
        console.log('Error => ', error);
        }
    }
    const onShare = async () => {
        try {
        const result = await Share.open({
        title: 'App link',
    message: 'Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en', 
    url: 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en'
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
            // shared with activity type of result.activityType
            } else {
            // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
        } catch (error) {
          Alert.alert(error.message);
        }
    };
    return (
      <SafeAreaView>
        <ScrollView>
            <StatusBar  
                        backgroundColor = "#b3e6ff"  
                        barStyle = "dark-content"   
                        hidden = {false}    
                        translucent = {false}  
            /> 
                    <View style={{height:hp(8.4),width:screen_width,flexDirection:'row',backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                        {/* <TouchableOpacity onPress={()=>navigation.openDrawer()} style={{flex:1}}>
                            <Ionicons name="md-menu" size={30} color="#000000" style={{margin:10}} />
                        </TouchableOpacity> */}
                        <View style={{flex:8}}>
                        <Text style={{marginLeft:wp(5.6),fontSize:hp(2.8),fontWeight:'bold'}}>Hi Chitra !!</Text>
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

                    <View style={{marginTop:hp(3)}}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <TouchableOpacity style={{height:hp(6),width:wp(45),alignItems:'center',justifyContent:'center',backgroundColor:'black',borderRadius:hp(4.2)}} onPress={()=> navigation.navigate('CreateStoreStack')}>
                                <Text style={{color:'white'}}>Create Store</Text>
                            </TouchableOpacity>
                            <View style={{width:wp(3),height:hp(6)}}/>
                            <TouchableOpacity style={{height:hp(6),width:wp(45),alignItems:'center',justifyContent:'center',backgroundColor:'black',borderRadius:hp(4.2)}} onPress={() => navigation.navigate('ManageStoreStack')}>
                                <Text style={{color:'white'}}>Manage Store</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{marginTop:hp(3)}}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <TouchableOpacity style={{height:hp(6),width:wp(45),alignItems:'center',justifyContent:'center',backgroundColor:'black',borderRadius:hp(4.2)}} onPress={()=> navigation.navigate('StoreAdvertising')}>
                                <Text style={{color:'white'}}>Store Advertising</Text>
                            </TouchableOpacity>
                            <View style={{width:wp(3),height:hp(6)}} />
                            <TouchableOpacity style={{height:hp(6),width:wp(45),alignItems:'center',justifyContent:'center',backgroundColor:'black',borderRadius:hp(4.2)}} onPress={()=>onShare()}>
                                <Text style={{color:'white'}}>Share your Store</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

{/*                     <View style={{marginTop:hp(3.5),height:hp(5.6),alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity style={{height:hp(5.6),width:wp(90),borderRadius:hp(4.2),backgroundColor:'#000',alignItems:'center',justifyContent:'center'}}
                                onPress={
                                    () => navigation.navigate('StartPostPage')
                                }>
                                <Text style={{fontSize:hp(2.1),color:'white'}}>
                                    Create Your Own Store
                                </Text>
                        </TouchableOpacity>
                    </View>                    
                    <View style={{marginTop:hp(2),height:hp(5.6),alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity style={{height:hp(5.6),width:wp(90),borderRadius:hp(4.2),backgroundColor:'#000',alignItems:'center',justifyContent:'center'}}
                                onPress={
                                    () => navigation.navigate('StartPostPage')
                                }>
                                <Text style={{fontSize:hp(2.1),color:'white'}}>
                                    Manage your Store
                                </Text>
                        </TouchableOpacity>
                    </View> */}
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
                                                <Card.Cover source={require('./Images/kancheevaramSarees.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Kancheevaram-S001</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/Nauvari.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Nauvari-S002</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/Bandhani.jpeg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Bandhani-S003</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                    </View>

                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(1)}}>
                                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/Tant.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Tant-S004</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/Banarsi.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Banarsi-S005</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/Chikankari.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Chikankari-S006</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                    </View>

                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(1)}}>
                                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/Kasavu.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Kasavu-S007</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/Pochampally.jpeg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Pochampally-S008</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/Phulkari.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
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
                                                <Card.Cover source={require('./Images/Primer.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Primer -B001</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/BBCream.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>BB Cream -B002</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/Foundation.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Foundation -B003</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                    </View>

                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/Eyeliner.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Eye Liner -B004</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/blush.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Blush-B005</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/Lipstick.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Lipstick -B006</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                    </View>

                                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:hp(2)}}>
                                        <TouchableRipple onPress={()=> {console.log('kancheevaram selected')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/Kajal.png')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Kajal -B007</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('ElectricStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/Eyeshadow.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
                                                <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
                                                    <TouchableOpacity><Text style={{fontSize:13}}>Eye Shadow -B008</Text></TouchableOpacity>
                                                </Card.Actions>     
                                            </Card>
                                        </TouchableRipple>

                                        <TouchableRipple onPress={()=> {navigation.navigate('plumberStack')}}>
                                            <Card style={{flex:1,width:screen_width/3-10,height:hp(19.6),alignItems:'center',justifyContent:'center',margin: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 1,elevation: 20,}}>
                                                <Card.Cover source={require('./Images/Maskara.jpg')} style={{height:100,width:screen_width/3-10,resizeMode:'contain',alignSelf:'center'}}/>
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

export default LandingPage;