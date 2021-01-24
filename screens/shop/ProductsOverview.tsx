import React,{useEffect} from 'react'
import {View,FlatList , Text , StyleSheet, Image, ImageBackground, Button} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import CustomHeaderButton from '../../components/UI/HeaderButton'
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'
import {actions as cartActions} from '../../store/slices/cartSlice'
import AppColors from '../../Colors/AppColors'

const ProductsOverviewScreen = (props) => {

       
    const onSelectHandler = (...args:any) => {
         props.navigation.navigate('Product Details',{
            productId:args[0],
            title:args[1]
          })
    }

    const renderItems =  itemData =>{
        return(
            <ProductItem 
            title={itemData.item.getTitle()} 
            imageUrl={itemData.item.getImageUrl()} 
            price={itemData.item.getPrice()}
            onSelect={()=> onSelectHandler(itemData.item.getId(), itemData.item.getTitle())}
            
            >
              <Button
              title="View Details"
              onPress={() =>onSelectHandler(itemData.item.getId(), itemData.item.getTitle())}
              color={AppColors.primary}
             />
             <Button
              title="To Cart"
              onPress={()=> {
                dispatch(cartActions.addToCart({
                    product:itemData.item,
                }))
              }}
              color={AppColors.primary}
             />   
            </ProductItem>
    )} 

    const products = useSelector(state=> state.entities.products.availableProducts)
    const dispatch = useDispatch()
   
    return(
        <View style={styles.productsContainer}>
            <FlatList
                data={products}
                renderItem={renderItems}
                keyExtractor={item=>item.getId()}
            />
        </View> 
        
    )
}

const styles = StyleSheet.create({
   productsContainer: {
        alignItems:'center',
        padding:20
   }
})

export const options = navData => ({

    headerRight: () => {
        return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item 
                    title='Cart'
                    iconName='md-cart'
                    onPress={()=>{
                        navData.navigation.navigate('Cart')
                        
                    }}
                    />
               </HeaderButtons>
    }    
})

export default ProductsOverviewScreen;