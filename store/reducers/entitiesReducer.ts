import {combineReducers} from 'redux'
import productsReducer from '../slices/productsSlice'
import CartReducer from '../slices/cartSlice'
import OrdersReducer from '../slices/ordersSlice'

const entitiesReducer = combineReducers({
    products:productsReducer,
    cart:CartReducer,
    orders:OrdersReducer,
})

export default entitiesReducer;