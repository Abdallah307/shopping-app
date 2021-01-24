import React from 'react'
import {View , Text , StyleSheet , FlatList} from 'react-native'
import {useSelector , useDispatch} from 'react-redux'
import OrderItem from '../../components/shop/OrderItem'

const OrdersScreen = props => {
    const orders = useSelector(state => {
        return state.entities.orders.orders
    })

    const renderOrders = itemData => {
        return <OrderItem amount={itemData.item.totalAmount} date={itemData.item.date} />
    }
    
   
    if(orders.length === 0){
        return(
            <View style={{flex: 1, justifyContent:'center', alignItems:'center',}}>
                 <Text>No Orders Found</Text>
            </View>
        )
    }
   
    return(
            <FlatList
            contentContainerStyle={{flex:1,}}
            data={orders}
            renderItem={renderOrders}
            />
    )  
}

export default OrdersScreen;