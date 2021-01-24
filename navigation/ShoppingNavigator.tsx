import React from 'react'
import {BottomTabNavigationOptions, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack'
import ProductsOverviewScreen,{options} from '../screens/shop/ProductsOverview'
import AppColors from '../Colors/AppColors'
import ProductDetailScreen from '../screens/shop/ProductDetail'
import CartScreen from '../screens/shop/CartScreen'
import OrdersScreen from '../screens/shop/OrdersScreen'
import { View , Text } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import UserProductsScreen from '../screens/user/UserProductsScreen'
const Stack = createStackNavigator()

const bottomTabs = createBottomTabNavigator()



const bottomTabsNavigator = (props) => {
    return(
        <NavigationContainer>
            <bottomTabs.Navigator
            tabBarOptions={{
                activeTintColor:AppColors.primary,
                labelStyle:{
                    borderBottomColor:AppColors.primary,
                    fontSize:14,
                    fontFamily:'open-sans-bold',
                },
            }}
            >
                <bottomTabs.Screen 
                options={{
                    tabBarIcon:() => <Ionicons 
                    name='md-cart' 
                    color={AppColors.primary} 
                    size={23} 
                    /> ,
        
                }} 
                name='Products' 
                component={ShoppingNavigator}
                />
                <bottomTabs.Screen
                options={{
                    tabBarIcon:() => <Ionicons 
                    name='md-list' 
                    color={AppColors.primary} 
                    size={23} 
                    />

                }}  
                name='Orders'   
                component={OrdersNavigator}
                />

                <bottomTabs.Screen
                options={{
                    tabBarIcon:() => <Ionicons 
                    name='md-create' 
                    color={AppColors.primary} 
                    size={23} 
                    />

                }}  
                name='Admin'
                component={AdminNavigator}
                />
            </bottomTabs.Navigator>
        </NavigationContainer>
    )
}



const screenOptions:StackNavigationOptions = {
    headerTintColor:AppColors.primary,
    headerTitleAlign:'center'
}

const ShoppingNavigator = (props) => {
    return(
      
            <Stack.Navigator 
            initialRouteName='Products' 
            screenOptions={screenOptions}
            >
                <Stack.Screen 
                name='Products' 
                component={ProductsOverviewScreen}
                options={options}
                />
                <Stack.Screen name='Product Details' component={ProductDetailScreen}/>
                <Stack.Screen name='Cart' component={CartScreen}/>
            </Stack.Navigator>
        
    )
}

const OrdersNavigator = (props) => {
    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name='Orders' component={OrdersScreen}/>
        </Stack.Navigator>
    )
}

const AdminNavigator = (props) => {
    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name='My Products' component={UserProductsScreen}/>
        </Stack.Navigator>
    )
}

export default bottomTabsNavigator;