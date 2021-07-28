import * as React from 'react';
import {View,TouchableOpacity,TextInput} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//screens
// import PostPropertyStack from './PostPropertyStack';
// import StartPostPage from './StartPostPage';
// import DetailsScreen from './DetailsScreen';
// import profileScreen from './profile';
// import prevTransactions from './TransactionPage';
// import SupportScreen from './SupportScreen';
// import SupportStackScreen from './SupportStackScreen';
// import MainPage from './MainPage';
// import Rating from './Rating';

import LandingPage from './LandingPage';
import PendingOrderScreen from './PendingOrderScreen';
import HistoryScreen from './HistoryScreen';
import SupportStackScreen from './SupportStackScreen';

const h1=createStackNavigator();
const h2=createStackNavigator(); 
const stack=createStackNavigator();
const tab=createMaterialBottomTabNavigator();

const MainTabScreen = ({navigation}) => {

    handleTabPress = ({ navigation }) => {
        navigation.popToTop();
        navigation.navigate(navigation.state.routeName);
    }
    
    return (
     <tab.Navigator 
     initialRouteName="Home" 
     activeColor="#ffffff"
     inactiveColor="#000000"
     barStyle={{ backgroundColor: '#002858',height:hp(8.4)}}   
     >
         <tab.Screen 
         name="Home" 
         component={LandingPage} 
        //  listeners={({ navigation, route }) => ({
        //         tabPress: e => {
        //         // Prevent default action
        //         e.preventDefault();

        //         // Do something with the `navigation` object
        //         navigation.navigate('PostPropertyStack');
        //         },
        //  })}
         options={{  
            
             tabBarIcon:()=>(
                <FontAwesome name="home" size={hp(3.5)} color="#ffffff" align='center'/> 
             ),
             keyboardHidesTabBar: true,
         }}/>
         <tab.Screen
         name="Pending Orders" 
         component={PendingOrderScreen} 
        //  listeners={({ navigation, route }) => ({
        //         tabPress: e => {
        //         // Prevent default action
        //         e.preventDefault();

        //         // Do something with the `navigation` object
        //         navigation.navigate('');
        //         },
        //  })}
         options={
             {
                 tabBarLabel:'Pending Orders',
                 tabBarIcon:()=>(
                    <MaterialIcons name="pending-actions" size={hp(3.5)} color="#ffffff" />
                 ),
             }
          }
         />
         
         <tab.Screen 
         name="History" 
         component={HistoryScreen} 
         options={
             {
                 tabBarLabel:'History',
                 tabBarIcon:()=> (
                    <FontAwesome5 name="history" size={hp(3.2)} color="#ffffff" />
                 )
             }
         }/>
         <tab.Screen 
         name="Help" 
         component={SupportStackScreen} 
         options={
             {
                 tabBarLabel:'Help',
                 tabBarIcon:()=>(
                    <Feather name="help-circle" size={hp(3.5)} color="#ffffff" />
                 )
             }
         }/>
     </tab.Navigator>
    );

}
export default MainTabScreen;

