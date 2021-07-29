import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from './SignIn';
import MainTabScreen from './MainTabScreen';
import SignUp from './SignUp';
// import PostPropertyStack from './PostPropertyStack';
// import SearchLocationStack from './SearchLocationStack';
import AccountStackScreen from './AccountStack';
//import MultiSelectExample from './SelectMultiProperties';
//import Rating from './Rating';
//import Furnishings from './Furnishings';
import SplashScreen from './SplashScreen';
import ActiveOrders from './ActiveOrders';

const RootStackNavigator=createStackNavigator();

function StartStack() {
    return (
      <RootStackNavigator.Navigator headerMode="none"> 
          {/* <RootStackNavigator.Screen name="Ratings" component={Rating}/> */}
          {/* <RootStackNavigator.Screen name="Furnishings" component={Furnishings}/> */}
          <RootStackNavigator.Screen name="Splash" component={SplashScreen}/>
          <RootStackNavigator.Screen name="MainTabScreen" component={MainTabScreen}/>
          <RootStackNavigator.Screen name="SignIn" component={SignIn}/>
          <RootStackNavigator.Screen name="SignUp" component={SignUp}/>
          {/* <RootStackNavigator.Screen name="SearchLocation" component={SearchLocationStack}/>
          <RootStackNavigator.Screen name="PostPropertyStack" component={PostPropertyStack}/> */}
          <RootStackNavigator.Screen name="AccountStack" component={AccountStackScreen}/>
          <RootStackNavigator.Screen name="ActiveOrders" component={ActiveOrders}/>
      </RootStackNavigator.Navigator>
    );
};

export default StartStack;