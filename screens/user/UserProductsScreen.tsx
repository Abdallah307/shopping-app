import React from 'react'
import {View , StyleSheet , Text, FlatList , Button , Alert } from 'react-native'
import { useSelector , useDispatch } from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'
import AppColors from '../../Colors/AppColors'
import {actions as productActions} from '../../store/slices/productsSlice'
import {actions as cartActions} from '../../store/slices/cartSlice'
import { StackNavigationOptions } from '@react-navigation/stack'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import CustomHeaderButton from '../../components/UI/HeaderButton'
const UserProductsScreen = (props) => {

    const dispatch = useDispatch()

    const userProducts = useSelector(state=> {
        return state.entities.products.userProducts
    })

    const handleSelectItem = (id:string) => {
        props.navigation.navigate('Edit Product',{
            id 
        })
    }

    const deleteHandler = (itemData) => {
        Alert.alert(
            'Are you sure?',
            'Do you really want to delete this item?',[
                {text:'No',style:'cancel'},
                {text:'Delete', style:'destructive',  onPress:()=>{
                    dispatch(productActions.deleteUserProduct({
                        productId: itemData.item.getId()
                    }))
    
                    dispatch(cartActions.removeItemFromCart({
                        productId:itemData.item.getId()
                    }))
                }}
            ]
            
        )
    }

    const renderUserProducts = itemData => {
        return <ProductItem  
         title={itemData.item.getTitle()}
         imageUrl={itemData.item.getImageUrl()}
         price={itemData.item.getPrice()}
         onSelect={()=>{handleSelectItem(itemData.item.getId())}}
         >
             <Button
              title="Edit"
              onPress={()=>props.navigation.navigate('Edit Product',{
                  id:itemData.item.getId()
              })}
              color={AppColors.primary}
             />
             <Button
              title="Delete"
              onPress={()=> deleteHandler(itemData)}
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