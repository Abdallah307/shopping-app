import React,{useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Button,
  ViewBase,
} from "react-native";
import {useSelector} from 'react-redux'
import AppColors from '../../Colors/AppColors'
const ProductDetailScreen = (props) => {
    const productId = props.route.params.productId
    const selectedProduct = useSelector(state=>{
        return state.entities.products.availableProducts.find(product=>{
            return product.getId() == productId
        })
    })

    useEffect(()=>{
        props.navigation.setOptions({title:selectedProduct.getTitle()})
    },[selectedProduct.getTitle()])
    
    return(
        <View style={styles.mainContainer}>
            <View style={styles.imageView}> 
                <ImageBackground style={styles.imageBackground}
                source={{
                    uri:selectedProduct.getImageUrl()
                }}
                />
            </View>
            <View style={styles.buttonView}>
                <Button color={AppColors.primary} title='Add to cart' />
            </View>

            <View style={styles.detailsView}>
                <View style={{marginBottom:12}}>
                    <Text>{selectedProduct.getPrice()}$</Text>
                </View>

                <View>
                    <Text ellipsizeMode='tail' style={styles.productDetailsText}>{selectedProduct.getDescription()}</Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
    },
    imageView:{
        width:'100%',
        height:'40%'
    },
    imageBackground:{
        width:'100%',
        height:'100%',
    },
    buttonView:{
        alignItems:'center',
        marginVertical:12
    },
    detailsView:{
        justifyContent:'space-between',
        alignItems:'center',
    },
    productDetailsText:{
        textAlign:'center',
        marginHorizontal:20
    }
})

export default ProductDetailScreen;
