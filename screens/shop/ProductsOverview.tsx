import React from 'react'
import {View , Text , StyleSheet, Image, ImageBackground, Button} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import ProductItem from '../../components/ProductItem'

const renderItems = itemData =>{
    return(
        <ProductItem title={itemData.item.getTitle()} imageUrl={itemData.item.getImageUrl()} price={itemData.item.getPrice()}/>
    )} 

const ProductsOverviewScreen = (props) => {

    const products = useSelector(state=> state.entities.products.availableProducts)
    
   
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

export default ProductsOverviewScreen;