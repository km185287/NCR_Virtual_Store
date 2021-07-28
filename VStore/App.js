// App.js
import React from 'react';
import { StyleSheet, Text, View, Alert,BackHandler } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
//import OneSignal from 'react-native-onesignal';
import StartStack from './StartStack';
//import Rating from './Rating';
//import withCodePush from './WithCodePush';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import NetInfo from "@react-native-community/netinfo";

class App extends React.Component{

    // state = {
    //     unsubscribe : null
    // };

    constructor(props) {
       super(props);
    }

    componentDidMount() {
        // Subscribe
        this.unsubscribe = NetInfo.addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            if(state.isConnected == false) Alert.alert("Please check your internet connection");
        });
    }

    componentWillUnmount() {
        // // Unsubscribe
        // if (this.unsubscribe != null) unsubscribe()
        this.unsubscribe();
    }

  render() {
      return (
          <NavigationContainer>
              <StartStack />
          </NavigationContainer>  
      );    
  }
}

export default App;