import {createSlice} from '@reduxjs/toolkit'
import CartItem from '../../models/CartItem';

const slice = createSlice({
    name:'cart',
    initialState:{
        items:{},
        totalAmount:0
    },
    reducers:{
        addToCart: (state , action) =>{
            //check if exist
            const productId = action.payload.product.getId()
            
            if (state.items[productId]) {
                state.items[productId].incrementQuantity()
                state.items[productId].setSum(state.items[productId].getProductPrice())
                state.totalAmount = state.totalAmount + state.items[productId].getProductPrice()
            }
            else{
                state.items[productId] = new CartItem(
                    1,action.payload.product.getPrice(),
                    action.payload.product.getTitle(),
                    action.payload.product.getPrice()
                )

                state.totalAmount = state.totalAmount + state.items[productId].getProductPrice()

            }   
        },
        deleteOneFromCart: (state , action) =>{
            if(state.items[action.payload.itemId].getQuantity() > 1){
                state.totalAmount = state.totalAmount - state.items[action.payload.itemId].getProductPrice()
                state.items[action.payload.itemId].decrementQuantity()
            }
            else{
                state.totalAmount = state.totalAmount - state.items[action.payload.itemId].getProductPrice()
                delete state.items[action.payload.itemId]
            }
            
        },
        clearCart: (state , action) => {
            state.items = {}
            state.totalAmount = 0
        },

        removeItemFromCart:(state, action) => {
            const productId = action.payload.productId
            if(state.items[productId]){
                state.totalAmount -= state.items[productId].getSum()
                delete state.items[productId]
            }
        }
    }
})

export default slice.reducer;
export const actions = slice.actions