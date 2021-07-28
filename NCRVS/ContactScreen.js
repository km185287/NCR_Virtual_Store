import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Linking, Dimensions, Picker, Alert} from 'react-native';
import {TextInput} from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Contact({navigation}) {

      const [serviceId,setServiceId]=useState(0);
      const [complaint,setComplaint]=useState('');
      const [selectedValue,setSelectedValue]=useState('');
      const [issuetype,setIssueType] = useState('');

      const height=Dimensions.get('window').height;
      const width = Dimensions.get('window').width;
      
      const callNumber = (phone) => {

            console.log('callNumber ----> ', phone);
            let phoneNumber = phone;
            if (Platform.OS !== 'android') {
                 phoneNumber = `telprompt:${phone}`;
            }
            else  {
                 phoneNumber = `tel:${phone}`;
            }
            Linking.canOpenURL(phoneNumber)
            .then(supported => {
            if (!supported) {
                Alert.alert('Phone number is not available');
              } else {
                return Linking.openURL(phoneNumber);
            }
          })
          .catch(err => console.log(err));
      };
      const sendComplaint = async() => {

            const mobile = parseInt(await AsyncStorage.getItem('mobileNo',mobile));
            // const Order_ID = this.serviceId;
            // const Issue_type = this.selectedValue;
            // const Issue = this.complaint;

            fetch('http://192.168.43.216:80/tgkp/Complaints.php', {
                  method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                  
                      mobileNo:mobile,
                      Order_ID:serviceId,
                      Issue_type:selectedValue,
                      IssueType:selectedValue,
                      Issue : complaint,
                  })
                  
              }).
              then((response) => response.text())
              .then((responseJson) => {   
                  // Showing response message coming from server after inserting records.
                      navigation.navigate('applianceStack');
                      console.log(responseJson);
              }).catch((error) => {
                      console.log('lksdjflkjsdf');
                      console.error(error);
              });
      }

      const registerComplaint = async() => {

          try {
              const mobile = parseInt(await AsyncStorage.getItem("MobileNo"));
              const username = await AsyncStorage.getItem("UserName");
              const email = await AsyncStorage.getItem("EmailID");

              await fetch("http://192.168.1.100:3000/RegisterComplaint",{
                  method : 'POST',
                  headers : {
                      'ACCEPT': 'application/json',
                      'Content-Type':'application/json'
                  },
                  body : JSON.stringify({
                      userName : username,
                      MobileNo : mobile,
                      emailID : email,
                      IssueType : issuetype,
                      Issue : complaint
                  })
              })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  Alert.alert("Your complaint registered with us, We will reach out to you in a short time");
                  navigation.navigate('LandingPage');
              })
              .catch(e => {
                  console.log("Problem in registering complaint",e);;
                  Alert.alert('Hey there is some error at our side, please try again after some time');
                  navigation.navigate("LandingPage");
              })
          } catch(err) {
              console.log(err);
          }
      };

      return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity onPress={() => { callNumber("9676791136")}} style={{borderRadius:hp(4.2),borderWidth:wp(0.28),backgroundColor:'black',height:hp(5.6),width:wp(28),alignItems:'center',justifyContent:'center'}}>
                  <Text style={{color:'white'}}>Call Us</Text>
              </TouchableOpacity>
          </View>
          <Text style={{flex:1,marginTop:hp(2.8)}}>OR</Text>
          <View style={{flex:2,marginTop:hp(2.8),alignItems:'center',justifyContent:'center'}}>
              
              <Picker
                  selectedValue={issuetype}
                  style={{ height: hp(7), width: 0.85*width }}
                  mode="dialog"
                  onValueChange={(itemValue, itemIndex) => setIssueType(itemValue)}
                >
                  <Picker.Item label="Application Issue" value="applicationIssue" />
                  <Picker.Item label="Payment Issue" value="paymentIssue" />
                  {/* <Picker.Item label="Report User(s)" value="AbuseIssue" /> */}
                  <Picker.Item label="Others" value="others"/>
              </Picker>
              {/* <TextInput style={{height:hp(7),marginTop:hp(2.8),width:width*0.85}}
                  label="Service ID"
               
                  type="flat"
                  onChangeText={serviceId => setServiceId(serviceId)}      
              /> */}
              <TextInput style={{height:hp(11.2),marginTop:hp(4.2),width:0.85*width}}
                 label="Your Issue"
                 multiline={true}
                 numberOfLines={3}
                 onChangeText={complaint => setComplaint(complaint)}
              />
          </View>
          <View style={{flex:2,marginTop:hp(1),alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity style={{backgroundColor:'black',width:0.85*width,height:hp(5.6),alignItems:'center',justifyContent:'center'}} 
                onPress={() => {registerComplaint()}}>
                    <Text style={{color:'white'}}>Submit</Text>
              </TouchableOpacity>
          </View>
          <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
{/*               
              <Text style={{fontSize:hp(2.1)}}>**You can find your Service ID in your bookings section or Manage Your Bookings section in Help.</Text> */}
          </View>
        </View>      
      );  
}