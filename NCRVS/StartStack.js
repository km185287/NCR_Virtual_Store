import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from './SignIn';
import MainTabScreen from './MainTabScreen';
import SignUp from './SignUp';
import SplashScreen from './SplashScreen';
import CreateStore from './CreateStore';
import CreateStoreStack from './CreateStoreStack';
import ManageStoreStack from './ManageStoreStack';
import AccountStackScreen from './AccountStack';
import StoreAdvertising from './StoreAdvertising';
import NewUserLandingScreen from './NewUserLandingScreen';
import EditStore from './EditStore';
import PendingDelivery from './PendingDelivery';
import LandingPage from './LandingPage';
import ManageExistingStore from './ManageExistingStore';

const RootStackNavigator=createStackNavigator();

function StartStack() {
    return (
      <RootStackNavigator.Navigator headerMode="none"> 
          <RootStackNavigator.Screen name="Splash" component={SplashScreen}/>
          <RootStackNavigator.Screen name="SignIn" component={SignIn}/>
          <RootStackNavigator.Screen name="SignUp" component={SignUp}/>
          <RootStackNavigator.Screen name="MainTabScreen" component={MainTabScreen}/>
          <RootStackNavigator.Screen name="CreateStoreStack" component = {CreateStoreStack}/>
          <RootStackNavigator.Screen name="ManageStoreStack" component={ManageStoreStack}/>
          <RootStackNavigator.Screen name="AccountStack" component={AccountStackScreen}/> 
          <RootStackNavigator.Screen name="StoreAdvertising" component={StoreAdvertising}/>
          <RootStackNavigator.Screen name="NewUserLandingScreen" component={NewUserLandingScreen}/>
          <RootStackNavigator.Screen name="EditStore" component={EditStore}/>
          <RootStackNavigator.Screen name="PendingDelivery" component={PendingDelivery}/>
          <RootStackNavigator.Screen name="LandingPage" component={LandingPage}/>
          <RootStackNavigator.Screen name="ManageExistingStore" component={ManageExistingStore} />
      </RootStackNavigator.Navigator>
    );
};

export default StartStack;