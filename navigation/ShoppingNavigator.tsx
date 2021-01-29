import React from 'react'
import {BottomTabNavigationOptions, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack'
import ProductsOverviewScreen,{options} from '../screens/shop/ProductsOverview'
import AppColors from '../Colors/AppColors'
import ProductDetailScreen from '../screens/shop/ProductDetail'
import CartScreen from '../screens/shop/CartScreen'
import OrdersScreen , {ordersScreenOptions} from '../screens/shop/OrdersScreen'
import { View , Text } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import UserProductsScreen from '../screens/user/UserProductsScreen'
import EditProductScreen from '../screens/user/EditProductScreen'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/UI/HeaderButton'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {useSelector} from 'react-redux'
const Stack = createStackNavigator()



const bottomTabs = createMaterialBottomTabNavigator()



const bottomTabsNavigator = (props) => {
    const numberOfOrders = useSelector(state => {
        return state.entities.orders.numberOfOrders
    })
    return(
        <NavigationContainer>
            <bottomTabs.Navigator
            activeColor='white'
            shifting={true}
            barStyle={{
                backgroundColor:AppColors.secondary,
            }}
           
           >
                <bottomTabs.Screen 
                options={{
                    tabBarIcon:() => <Ionicons 
                    name='md-cart' 
                    color={AppColors.primary} 
                    size={23} 
                    /> ,
                    tabBarColor:AppColors.secondary
        
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
                    />,
                    tabBarBadge:numberOfOrders,
                    tabBarColor:AppColors.third
                    
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
                    />,
                    tabBarColor:AppColors.fourth

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
    headerTitleAlign:'center',
    headerStyle:{
        backgroundColor: AppColors.secondary
    }
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
            <Stack.Screen  
            name='My Products' 
            component={UserProductsScreen}
            options={(navData) => ({

                headerRight: () => {
                    return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                                <Item 
                                title='Cart'
                                iconName='md-add-circle'
                                onPress={()=>{
                                   navData.navigation.navigate('Edit Product',{})
                                    
                                }}
                                />
                           </HeaderButtons>
                }    
            })}
            />
            <Stack.Screen 
            options={navData => ({
    
                headerTitle : navData.route.params.id ? 'Edit Product': 'Add Product',
                headerRight: () => {
                    return(
                        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                            <Item
                            title='Save'
                            iconName='md-checkmark'
                            onPress={navData.route.params.submitting}
                            />
                        </HeaderButtons>
                    )
                },
               
            })}
            name='Edit Product' 
            component={EditProductScreen}/>
        </Stack.Navigator>
    )
}

export default bottomTabsNavigator;