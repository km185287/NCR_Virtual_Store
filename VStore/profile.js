
import React from 'react';
import {View,Button} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function profileScreen({ navigation }) {
   
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go to Home"
        />
      </View>
    );
  }
  export default profileScreen;