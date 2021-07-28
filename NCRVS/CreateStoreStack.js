import React from 'react';
import {Button, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//screens
import CreateStore from './CreateStore';
import AddProduct from './AddProduct';
import AddProductCategory from './AddProductCategory';
import DupCreateStore from './DupCreateStore';

const NewStoreStack = createStackNavigator();

const CreateStoreStack = () => {
  return (
     
            <NewStoreStack.Navigator screenOptions={{headerShown:false}}>
               <NewStoreStack.Screen name="CreateStore" component={CreateStore} />
               <NewStoreStack.Screen name="AddProduct" component={AddProduct}/>
               <NewStoreStack.Screen name="AddProductCategory" component={AddProductCategory}/>
               <NewStoreStack.Screen name="DupCreateStore" component={DupCreateStore} />
            </NewStoreStack.Navigator>
    
  );
}
export default CreateStoreStack;
