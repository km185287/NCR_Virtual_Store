import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import Accordian from './Accordian';
import { Colors } from './Colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class PayRefScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu :[
        { 
          title: 'How to pay for the services ?', 
        //   data: [
        //     {key:'Chicken Biryani', value:false},
        //     {key:'Mutton Biryani', value:false},
        //     {key:'Prawns Biryani', value:false},
        //     ]
        //  desc:"You can pay for the service either before or after service delivery. To pay after the service delivery, please ask the professional to send you the receipt and the online payment link. You can pay using Debit (ATM) cards or credit cards or Net Banking of all popular banks or For India only, wallets like PayTM & AmazonPay or cash.",
            desc:"You can pay using Debit (ATM) cards or credit cards or Net Banking of all popular banks in India, wallets like PayTM & AmazonPay or cash."
        },
        // { 
        //   title: 'How to use the HP credits ?',
        //   data: [
        //     {key:'Chicken Dominator', value:false},
        //     {key:'Peri Peri Chicken', value:false},
        //     {key:'Indie Tandoori Paneer', value:false},
        //     {key:'Veg Extraveganza', value:false}
        //   ]
        //   desc:"HP credits can only be used on the Home Pack Company Android and IOS app. HP Credits can also be used in categories which accepts online payment while paying for the services online. HP Credits can only be used while paying for the service online.",
        // },
        { 
         title: 'Refund Policy',
        //  data: [
        //    {key:'Cocktail', value:false},
        //    {key:'Mocktail', value:false},
        //    {key:'Lemon Soda', value:false},
        //    {key:'Orange Soda', value:false}
        //   ]
  //     desc:'On cancellation of a request, the refund will be automatically initiated into your original payment method within 5-7 business days. For example, if you paid for a service via credit card, the amount will be credit back into your credit card.',
         desc : "If a pack is bought and no postings are used, then your money will be refunded, in other cases no refund will be given. The refund will be automatically initiated into your original payment method, for example, if you paid for a service via credit card, the amount will be credit back into your credit card."
        },
        
      ]
     }
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderAccordians() }
      </View>
    );
  }

  renderAccordians=()=> {
    const items = [];
    for (item of this.state.menu) {
        items.push(
            <Accordian 
                title = {item.title}
                data = {item.desc}
            />
        );
    }
    return items;
}
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:'white',
   
  }
});