import {createSlice} from '@reduxjs/toolkit'
import moment from 'moment'


const slice = createSlice({
    name:'orders',
    initialState:{
        orders:[],
        numberOfOrders:0
        
    },
    reducers: {
        addOrder: (state , action) => {
            const order = action.payload.order
            state.orders.push({
                id: new Date().toString(),
                items: order.items,
                totalAmount:order.totalAmount,
                date: moment(new Date()).format('MMMM Do YYYY,hh:mm')
            })
            state.numberOfOrders++;

            
        }
    }
})

export default slice.reducer
export const actions  = slice.actions