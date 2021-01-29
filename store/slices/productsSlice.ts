import {createSlice} from '@reduxjs/toolkit'
import PRODUCTS from '../../data/dummyData'
import Product from '../../models/Product'
//create actions and create reducers
const productsSlice = createSlice({
    name:'products',
    initialState:{
        availableProducts:PRODUCTS,
        userProducts:PRODUCTS.filter(product=> product.getOwnerId() === 'u1'),
    },
    reducers:{
        //actions => action handlers
        deleteUserProduct:(state , action) => {
            const productId = action.payload.productId
            state.userProducts = state.userProducts.filter(product => product.getId() !== productId)
            state.availableProducts = state.availableProducts.filter(product => product.getId() !== productId)
        },
        createProduct:(state, action) => {
            const productData = action.payload
           state.availableProducts.push(new Product(
            productData.id,
            productData.ownerId,
            productData.title,
            productData.imageUrl,
            productData.description,
            productData.price
        ))

        state.userProducts.push(new Product(
            productData.id,
            productData.ownerId,
            productData.title,
            productData.imageUrl,
            productData.description,
            productData.price
        ))

            
        },
        updateProduct:(state, action) => {
            
        },
    }
})

export const actions = productsSlice.actions;

export default productsSlice.reducer;
