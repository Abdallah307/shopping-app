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
        productAdded: (products , action) => {

        },
        productDeleted: (products , action) => {

        }
    }
})

export const actions = productsSlice.actions;

export default productsSlice.reducer;
