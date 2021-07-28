import React from 'react';
import {Button, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//screens
import AccountScreen from './Account';
import SubscriptionScreen from './Subscription';
import EditProfile from './EditProfile';
import WalletScreen from './WalletScreen';
import AddMoneyToWallet from './AddMoneyToWallet';
import WithdrawFromWallet from './WithdrawFromWallet';

const AccountStack = createStackNavigator();

const AccountStackScreen = () => {
  return (
     
            <AccountStack.Navigator screenOptions={{headerShown:false}}>
               <AccountStack.Screen name="Account" component={AccountScreen} />
               <AccountStack.Screen name="Subscriptions" component={SubscriptionScreen} />
               <AccountStack.Screen name="EditProfile" component={EditProfile} />
               <AccountStack.Screen name="WalletScreen" component={WalletScreen} />
               <AccountStack.Screen name="AddMoneyToWallet" component={AddMoneyToWallet} />
               <AccountStack.Screen name="WithdrawFromWallet" component={WithdrawFromWallet} />
            </AccountStack.Navigator>
    
  );
}
export default AccountStackScreen;
