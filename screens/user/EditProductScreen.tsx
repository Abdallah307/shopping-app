import { Ionicons } from "@expo/vector-icons";
import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import CustomHeaderButton from '../../components/UI/HeaderButton'
import CustomTextInput from '../../components/UI/CustomTextInput'
import {useSelector} from 'react-redux'
const EditProductScreen = (props) => {
    
    const selectedProduct = useSelector(state=>{
        return state.entities.products.userProducts.find(product=>{
            return product.getId() === props.route.params.id 
        })
    }) 

    const [title , setTitle] = useState(selectedProduct?selectedProduct.getTitle():'')
    const [imageUrl , setImageUrl] = useState(selectedProduct?selectedProduct.getImageUrl():'')
    const [price , setPrice] = useState(selectedProduct?selectedProduct.getPrice().toString():'')
    const [description , setDescription] = useState(selectedProduct?selectedProduct.getDescription():'')
    
    const productId = props.route.params.id
   
  return (
    <ScrollView>
        <View style={styles.form}>
           <CustomTextInput 
           label='Title' 
           value={title} 
           onChangeText={(value)=> setTitle(value)}
           />
           <CustomTextInput 
           label='ImageUrl'
           value={imageUrl} 
           onChangeText={(value)=> setImageUrl(value)}
           />

           {productId?null:<CustomTextInput 
           label='Price'
           value={price} 
           onChangeText={(value)=> setPrice(value)}
           />}
           <CustomTextInput 
           label='Description'
           value={description} 
           onChangeText={(value)=> setDescription(value)}
           />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    form:{
      
    },
   
});



export default EditProductScreen;
