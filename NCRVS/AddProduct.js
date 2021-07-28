import React,{useState} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RNPickerSelect from 'react-native-picker-select';

//icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

function AddProduct({navigation}) {

    const [productCategory,setProductCategory] = useState(0);

    return (
        <View>
            <View style={{height:hp(40),width:wp(100),backgroundColor:'grey',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
                    <Feather name="plus-square" size={hp(6)} color="white"/>
                    <Text style={{color:'white',fontSize:hp(3)}}>Add Images</Text>
                </TouchableOpacity>
            </View>
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
            />
            <Input
                placeholder="Product Category"
                //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                style={{marginTop:hp(3)}}
                onChangeText={value => this.setState({ comment: value })}
            />
            <Input
                placeholder="Product Name"
                //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                style={{marginTop:hp(-4)}}
                onChangeText={value => this.setState({ comment: value })}
            />
            <Input
                placeholder="Price"
                //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                style={{marginTop:hp(-4)}}
                onChangeText={value => this.setState({ comment: value })}
            />
            <Input
                placeholder="Stock Size"
                //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                style={{marginTop:hp(-4)}}
                onChangeText={value => this.setState({ comment: value })}
            />
            <Input
                placeholder="Product Code"
                //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                style={{marginTop:hp(-4)}}
                onChangeText={value => this.setState({ comment: value })}
            />
        </View>
    );
}
export default AddProduct;