import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductsOverviewScreen from './screens/shop/ProductsOverview'
import {Provider} from 'react-redux'
import store from './store/store'
import DrawerNavigator from './navigation/ShoppingNavigator'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

const loadFont = () =>{
  return Font.loadAsync({
    'open-sans-regular':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const [isLoaded , setIsLoaded] = useState(false)

  if(!isLoaded){
    return(
      <AppLoading
      startAsync={loadFont}
      onFinish={()=> setIsLoaded(true)}
      onError={(err)=> console.log(err)}
      />
    )
  }

  return (
    <Provider store={store}>
        <DrawerNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
