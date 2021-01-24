import React from 'react'
import {View , StyleSheet , Text, FlatList , Button} from 'react-native'
import { useSelector , useDispatch } from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'
import AppColors from '../../Colors/AppColors'
import {actions as productActions} from '../../store/slices/productsSlice'
import {actions as cartActions} from '../../store/slices/cartSlice'
const UserProductsScreen = (props) => {

    const dispatch = useDispatch()

    const userProducts = useSelector(state=> {
        return state.entities.products.userProducts
    })

    const renderUserProducts = itemData => {
        return <ProductItem  
         title={itemData.item.getTitle()}
         imageUrl={itemData.item.getImageUrl()}
         price={itemData.item.getPrice()}
         onSelect={()=>{}}
         onAddToCart={()=>{}}
        >
             <Button
              title="Edit"
              onPress={()=>{}}
              color={AppColors.primary}
             />
             <Button
              title="Delete"
              onPress={()=> {
                dispatch(productActions.deleteUserProduct({
                    productId: itemData.item.getId()
                }))

                dispatch(cartActions.removeItemFromCart({
                    productId:itemData.item.getId()
                }))
              }}
              color={AppColors.primary}
             />   
        </ProductItem>
    }

    if(userProducts.length === 0) {
        return(
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text>No Products Yet</Text>
            </View>
        )
    }

    return(
        <FlatList
        data={userProducts}
        renderItem={renderUserProducts}
        keyExtractor={item=>item.getId()}
        />
    )
}

const style = StyleSheet.create({

})

export default UserProductsScreen;