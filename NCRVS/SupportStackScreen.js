import * as React from 'react';
import { Button,Text, View, Dimensions } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import SupportScreen from './SupportScreen';
import ContactScreen from './ContactScreen';
import Accordian from './Accordian';
import Colors from './Colors';
import PayRefScreen from './PayRefScreen';
// import ManOrders from './ManOrders';
import FAQScreen from './FAQScreen';
import AboutScreen from './AboutScreen';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SSNavigator=createStackNavigator();

export default function SupportStackScreen() {

  return (
      <SSNavigator.Navigator headerMode='none'> 
          <SSNavigator.Screen name="SupportScreen" component={SupportScreen}/>
          <SSNavigator.Screen name="Contact" component={ContactScreen}/>
          <SSNavigator.Screen name="Accordian" component={Accordian}/>
          <SSNavigator.Screen name="About" component={AboutScreen}/>
          <SSNavigator.Screen name="PayRef" component={PayRefScreen}/>  
          <SSNavigator.Screen name="FAQ" component={FAQScreen}/>
      </SSNavigator.Navigator>
    );
}