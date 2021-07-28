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

export default class FAQScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu :[
        { 
          title: 'How to book a service ?', 
        //   data: [
        //     {key:'Chicken Biryani', value:false},
        //     {key:'Mutton Biryani', value:false},
        //     {key:'Prawns Biryani', value:false},
        //     ]
          desc:'Search for the category you need. Open the category and follow the instructions as you go forward. Once you have booked the service, wait for a professional will be assigned 1 hour before the booked time. The assigned professional will reach the address you have provided and deliver the service.',
           
        },
        { 
          title: 'How to cancel a booking ?',
        //   data: [
        //     {key:'Chicken Dominator', value:false},
        //     {key:'Peri Peri Chicken', value:false},
        //     {key:'Indie Tandoori Paneer', value:false},
        //     {key:'Veg Extraveganza', value:false}
        //   ]
          desc:"If you want the service but can't avail it at the time you booked the service for,we recommend you to reschedulee the booking for a different time. If you want to cancel, you can go to 'Manage your Orders' section and click on cancel. Select the reason to cancel and submit.",
        },
        { 
         title: 'How to reschedule a booking ?',
        //  data: [
        //    {key:'Cocktail', value:false},
        //    {key:'Mocktail', value:false},
        //    {key:'Lemon Soda', value:false},
        //    {key:'Orange Soda', value:false}
        //   ]
         desc:"You can go to 'Manage Your Orders' section and can reschedule the service. Select the preferred time slot if available and submit",
        },
        { 
          title: 'How to know if my request is confirmed ?',
        //   data: [
        //     {key:'Choco Lava Cake', value:false},
        //     {key:'Gulabjamun', value:false},
        //     {key:'Kalajamun', value:false},
        //     {key:'Jalebi', value:false}
        //   ]
          desc:'Once you place a booking, you will receive a confirmation via SMS or email or Whatsapp informing you that the booking has been accepted. A verified professional will be assigned for your booking 1 hour before the service time.',
        },
        {
          title:'How can i contact the professional ?',
          desc:"Contact details of the professionals are shared with you in the projects section of your app. Open your project, select the professional you want to speak to and call the professional"
        },
        {
          title:'When will the professional reach for delivering service ?',
          desc:"Our professionals generally reach within the selected slot of booking. We track if the job is not started on time and our customer experience associates start working on the issue automatically. Be assured that either the professional or a HomePack representative will get in touch with you in case the job can't get started in time. If you face any problem, feel free to get in touch with us by selecting the booking for which you want to raise a complaint."
        },
        {
           title:'How can i rate and review the service of a professional ?',
           desc:"After each service is completed, you will be asked to rate the professional. You would also be allowed to leave a feedback for the service and suggest improvements on various parameters. You can also edit your rating or review anytime in the next 30 days.",
        },
        {
          title:'How can i book the same professional again who delivered my last service ?',
          desc:"You can book your preferred professional through HomePack Company Android and IOS apps. In order to book your preferred professional, select the services you want to book and select the address. You will be shown a list of professionals who provided services to you earlier and you can select any of them. We will show you the calendar of the pro you select and you can pick a time slot at which the professional is available. Please remember that on HomePack, professionals have choice to either accept your job or not take it up according to their preference."
        }
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
   backgroundColor:Colors.grey
  }
});