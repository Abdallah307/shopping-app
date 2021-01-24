import {createSlice} from '@reduxjs/toolkit'
import PRODUCTS from '../../data/dummyData'

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
        }
    }
})

export const actions = productsSlice.actions;

export default productsSlice.reducer;
