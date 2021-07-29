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
import LandingPage from './LandingPage';
import SearchHandle from './SearchBar';
import SearchWatchesMen from './SearchWatchesMen';
import DisplayProduct from './DisplayProduct';
//import DisplayStore from './DisplayStore';
import DisplayVStore from './DisplayVStore';

const MenuStack = createStackNavigator();

const MenuStackScreen = () => {
  return (
     
            <MenuStack.Navigator screenOptions={{headerShown:false}}>
                <MenuStack.Screen name="LandingPage" component={LandingPage}/>
                <MenuStack.Screen name="Search" component={SearchHandle}/>
                <MenuStack.Screen name="SearchWatchesMen" component={SearchWatchesMen} />
                <MenuStack.Screen name="DisplayProduct" component={DisplayProduct}/> 
                <MenuStack.Screen name="DisplayVStore" component={DisplayVStore} />
            </MenuStack.Navigator>
    
  );
}
export default MenuStackScreen;
