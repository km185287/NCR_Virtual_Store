import React from 'react';
import {Button, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//screens
import ManageStore from './ManageStore';
import AddProduct from './AddProduct';
import DelEditProduct from './DelEditProduct';
import EditStore from './EditStore';
import ManageExistingStore from './ManageExistingStore';

const ManageStoreStack = createStackNavigator();

const CreateStoreStack = () => {
  return (
     
            <ManageStoreStack.Navigator screenOptions={{headerShown:false}}>
               <ManageStoreStack.Screen name="ManageStore" component={ManageStore} />
               <ManageStoreStack.Screen name="AddProduct" component={AddProduct}/>
               <ManageStoreStack.Screen name="DelEditProduct" component={DelEditProduct}/>
               <ManageStoreStack.Screen name="EditStore" component={EditStore}/>
               <ManageStoreStack.Screen name="ManageExistingStore" component={ManageExistingStore}/>
            </ManageStoreStack.Navigator>
    
  );
}
export default CreateStoreStack;
