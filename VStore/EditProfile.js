import React, {useState} from 'react';
import {View,Button,Text,StatusBar,Modal,ScrollView,TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import {CalendarList} from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



function EditProfile({ navigation }) {

    const [modalVisible,setModalVisible]=useState(false);
    const [selectedTime,setSelectedTime]=useState('');
    const [Time,setTime]=useState('');
    const [bgcolor,setBgColor]=useState('white');
    const [schedule,setSchedule]=useState('');
    const [selected,setSelected]=useState(false);


    const [username,setUserName]=useState('');
    const [mobile,setMobile]=useState('');
    const [email,setEmail]=useState('');
    const [age,setAge]=useState('');
    const [phone,setPhone]=useState('');
    const [name,setName]=useState('');

    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year= new Date().getFullYear();

    var normaldays=[31,28,31,30,31,30,31,31,30,31,30,31];
    var leapdays=[31,29,31,30,31,30,31,31,30,31,30,31];

    var newdate,newmonth,newyear;

    if((year%4==0 && year%100!=0) || year%400==0)
    {

          if(date+30>leapdays[month])
          {
              if(month+1>12)
              {
                  date=(date+31)%leapdays[month];
                  if(month+1>12) month=(month+1)%12;
                  year+=1;
              }
              else
              {
                  date=(date+31)%leapdays[month];
                  if(month+1>12) month=(month+1)%12;
                  else month+=1;
              }
          }
    }
    else
    {
          if(month+1>12)
          {
              date=(date+31)%normaldays[month];
              if(month+1>12) month=(month+1)%12;
              year+=1;
            
          }
          else
          {
              date=(date+31)%normaldays[month];
              if(month+1>12) month=(month+1)%12;
          }
    }
    var targetdate=new Date(year,month,date);

   // const bgcolor = this.bgcolor;

    function onDayPress(day) {
        setSelectedTime(day.dateString);
        setSchedule(day.dateString);
        setModalVisible(false)
        console.log(day.dateString);

        //this.props.navigation.navigate('Slot', { bookingDate : day })
    }

    const setAsyncValues = async(username,mobile) => {
        try {
            const temp=mobile.toString();
            await AsyncStorage.setItem('UserName',username);
            await AsyncStorage.setItem('MobileNo',temp);
            console.log("values set success");
        }catch(e) {
            console.log(e);
        }
    }
    const updateUserDetails = async() => {

        try {
            const name = await AsyncStorage.getItem("UserName");
            const phone = parseInt(await AsyncStorage.getItem("MobileNo"));
            
            const encodedValue = encodeURIComponent(phone);
            console.log(username);
            console.log(mobile);
            console.log(age);
            console.log(email);

            const tempMobile = parseInt(mobile);
            const tempAge = parseInt(age);

            await fetch(`http://192.168.1.100:3000/updateUserProfile?MobileNo=${encodedValue}`,{
              method:'PUT',
              headers:{
                  'Accept':'application/json',
                  'Content-Type':'application/json',
              },
              body:JSON.stringify({ 
                   //MobileNo:tempMobile,
                   UserName:username,
                   EmailID:email,
                   Age:tempAge,
              })
              }).then(res => res.json())
              .then(async (data) => {
                    //await setAsyncValues(username,tempMobile);
                    try {
                        //const temp=mobile.toString();
                        console.log("data in edit profile",data);
                        await AsyncStorage.setItem('UserName',username);
                        //AsyncStorage.setItem('MobileNo',JSON.stringify(temp));
                        console.log("values set success");
                    }catch(e) {
                        console.log(e);
                    }                 
                  navigation.navigate('LandingPage');
                  const phone = parseInt(await AsyncStorage.getItem("MobileNo"));
                  console.log(phone);
              }).catch(err => {
                console.log("error",err);
            })

        }catch(err) {
            console.log("cannot fetch user details",err);
        }
    };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           {/* <View style={{height:hp(35),width:wp(100),alignItems:'center',justifyContent:'center'}}>
               
           </View> */}
           <Text style={{fontWeight:'bold',fontSize:hp(3)}}>Profile Update</Text>
           <View style={{height:hp(55),width:wp(100),alignItems:'center',marginTop:hp(2.8)}}>
              <ScrollView
                  vertical={true}
                  showsVerticalScrollIndicator={false}
                  nestedScrollEnabled={true}
               >
                 <TextInput style={{height:hp(7),marginTop:hp(2.8),width:wp(90)}}
                    label="UserName"
                    type="flat"
                    onChangeText={username => setUserName(username)}      
                 />
                 {/* <TextInput style={{height:hp(7),marginTop:hp(2.8),width:wp(90)}}
                    label="Mobile No"
                    type="flat"
                    onChangeText={mobile => setMobile(mobile)}      
                 /> */}
                 <TextInput style={{height:hp(7),marginTop:hp(2.8),width:wp(90)}}
                    label="Email ID"
                    type="flat"
                    onChangeText={email => setEmail(email)} 
                 />
                 <TextInput style={{height:hp(7),marginTop:hp(2.8),width:wp(90)}}
                    label="Age"
                    type="flat"
                    onChangeText={age => setAge(age)}     
                 />
               
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                    >
                    <CalendarList
                    onDayPress={onDayPress}
                    style={{ borderTopWidth: 1,paddingTop: 5,borderBottomWidth: 1,borderColor: '#eee',height: 350}}
                    hideExtraDays
                    markedDates={{[selected]: {selected: true}}}
                    pastScrollRange={0}
                    futureScrollRange={1}

                    minDate={new Date()}
                    maxDate={targetdate}
                    
                    theme={{
                        selectedDayBackgroundColor: 'green',
                        todayTextColor: 'green',
                        arrowColor: 'green',
                    }}
                    />
                </Modal>
            </ScrollView>
           </View>
           <TouchableOpacity style={{height:hp(6),width:wp(90),alignItems:'center',borderRadius:hp(4.2),justifyContent:'center',backgroundColor:'#000'}} onPress = {() => updateUserDetails()}>
                <Text style={{color:'white',fontSize:hp(2.3)}}>Update</Text>
            </TouchableOpacity>
      </View>
    );
}
export default EditProfile;
  