import React from 'react'
import {View , Text , StyleSheet ,FlatList,Button} from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import CartItem  from '../../models/CartItem'
import AppColors from '../../Colors/AppColors'
import CartItemCard  from '../../components/shop/CardItem'
import {actions as cartActions} from '../../store/slices/cartSlice'
import {actions as orderActions} from '../../store/slices/ordersSlice'
const CartScreen = (props) => {
    const dispatch = useDispatch()
    const cartTotalAmount = useSelector(state => state.entities.cart.totalAmount)
    const cartItems = useSelector(state =>{
        const trasnformedCartItems = []
        for(const key in state.entities.cart.items){
            trasnformedCartItems.push({
                productId:key,
                productTitle:state.entities.cart.items[key].getProductTitle(),
                productPrice:state.entities.cart.items[key].getProductPrice(),
                quantity: state.entities.cart.items[key].getQuantity(),
                sum:state.entities.cart.items[key].getSum()

            })
        }
        return trasnformedCartItems
    })

   
    const renderItems = (itemData) => {
        const item = itemData.item
        return(
            <CartItemCard
            quantity={item.quantity}
            title={item.productTitle}
            amount={item.sum}
            onRemove={()=>  dispatch(cartActions.deleteOneFromCart({
                            itemId: item.productId,
                    }))}
            />
        )
    }
    return(
        <View style={styles.cartContainerView}>
            <View style={styles.summaryView}>
                <Text style={styles.totalAmountText}>Total: <Text style={styles.priceText}>{Math.round(cartTotalAmount.toFixed(2) * 100) /100}$</Text> </Text>
                <Button 
                color={AppColors.secondary} 
                title='Order Now'
                disabled={cartItems.length === 0 ? true : false}
                onPress={()=>{
                    dispatch(orderActions.addOrder({
                        order:{
                            items: cartItems,
                            totalAmount: cartTotalAmount,
                        }
                    }))

                    dispatch(cartActions.clearCart({}))


                }}
                />
            </View>
           <FlatList
           data={cartItems}
           renderItem={renderItems}
           keyExtractor={(item)=>item.productId}
           />
        </View>
    )
}

const styles = StyleSheet.create({
    cartContainerView: {
        flex: 1,
    },
    
    summaryView:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:10,
        margin:20,
        padding: 20,
        backgroundColor:'white',
        shadowOpacity:0.26,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        elevation:4

    },
    totalAmountText:{
        fontFamily:'open-sans-bold',
        fontSize:18
    },
    priceText:{
        color:AppColors.primary,
    }
})

export default CartScreen