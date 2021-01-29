import { Ionicons } from "@expo/vector-icons";
import React, { useState, useCallback, useEffect, useReducer } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../../components/UI/HeaderButton'
import CustomTextInput from '../../components/UI/CustomTextInput'
import { useSelector, useDispatch } from 'react-redux'
import { actions as productActions } from '../../store/slices/productsSlice'

// Not related to redux
const formReducer = (state, action) => {
    if (action.type == 'FORM_INPUT_UPDATE') {
        const updatedValues = {
            ...state.inputValues,
            [action.payload.input]: action.payload.value
        }
        const updatedValidities = {
            ...state.inputValidities,
            [action.payload.input]: action.payload.isValid
        }

        let updatedFormIsValid = true
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
        }
        return {
            ...state,
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues,
        }

    }

    return state

}



const EditProductScreen = (props) => {

    const selectedProduct = useSelector(state => {
        return state.entities.products.userProducts.find(product => {
            return product.getId() === props.route.params.id
        })
    })

    const dispatch = useDispatch()

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            title: selectedProduct ? selectedProduct.getTitle() : '',
            imageUrl: selectedProduct ? selectedProduct.getImageUrl() : '',
            description: selectedProduct ? selectedProduct.getDescription() : '',
            price: selectedProduct ? selectedProduct.getPrice() : '',
        },
        initialValidities: {
            title: selectedProduct ? true : false,
            imageUrl: selectedProduct ? true : false,
            description: selectedProduct ? true : false,
            price: selectedProduct ? true : false,

        },
        formIsValid: selectedProduct ? true : false,
    })


    const productId = props.route.params.id

    //useCallback insures that this function is not recreated every time the component re-renders
    // so we avoid entering an infinite loop
    const submitHandler = useCallback(() => {
        if (formState.formIsValid) {
            dispatch(productActions.createProduct({
                id: new Date().toString(),
                ownerId: 'u1',
                title: formState.inputValues.title,
                imageUrl: formState.inputValues.imageUrl,
                description: formState.inputValues.description,
                price: Number(formState.inputValues.price),
            }))
            props.navigation.goBack()
        }
        else {
            Alert.alert(
                'Wrong value',
                'Please Enter a Valid input',
            )
        }

    }, [dispatch, productId, formState.inputValues.title, formState.inputValues.imageUrl, formState.inputValues.price, formState.inputValues.description, formState.inputValues.isValidTitle]);

    useEffect(() => {
        props.navigation.navigate('Edit Product', {
            submitting: submitHandler
        })
    }, [submitHandler])

    const textChangeHandler = (inputIdentifier, text) => {
        let isValid = false

        if (text.trim().length > 0) {
            //here we put the validation code
            isValid = true
        }
        else {

        }
        dispatchFormState({
            type: 'FORM_INPUT_UPDATE',
            payload: {
                value: text,
                isValid: isValid,
                input: inputIdentifier

            }
        })
    }

    return (
        <ScrollView>
            <View style={styles.form}>
                <CustomTextInput
                    label='Title'
                    value={formState.inputValues.title}
                    onChangeText={(value) => textChangeHandler('title', value)}
                    keyboardType='default'
                    autoCapitalize='sentences'
                    returnKeyType='next'
                    onEndEditing={() => console.log('end editing')}
                    onSubmitEditing={() => console.log('submit')}
                    errorText='Please Enter a valid title'
                />

                <CustomTextInput
                    label='ImageUrl'
                    value={formState.inputValues.imageUrl}
                    onChangeText={(value) => textChangeHandler('imageUrl', value)}
                    keyboardType='default'
                    returnKeyType='next'
                    onEndEditing={() => console.log('end editing')}
                    onSubmitEditing={() => console.log('submit')}
                    errorText='Please Enter a valid image url'
                />

                {productId ? null : <CustomTextInput
                    label='Price'
                    value={formState.inputValues.price}
                    onChangeText={(value) => textChangeHandler('price', value)}
                    keyboardType='decimal-pad'
                    returnKeyType='next'
                    onEndEditing={() => console.log('end editing')}
                    onSubmitEditing={() => console.log('submit')}
                    errorText='Please Enter a valid price'
                />}
                <CustomTextInput
                    label='Description'
                    value={formState.inputValues.description}
                    onChangeText={(value) => textChangeHandler('description', value)}
                    keyboardType='default'
                    autoCapitalize='sentences'
                    multiline={true}
                    numberOfLines={3}
                    onEndEditing={() => console.log('end editing')}
                    onSubmitEditing={() => console.log('submit')}
                    errorText='Please Enter a valid description'
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    form: {

    },

});





export default EditProductScreen;
