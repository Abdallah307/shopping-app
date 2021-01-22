import {combineReducers} from 'redux'
import productsReducer from '../slices/productsSlice'

const entitiesReducer = combineReducers({
    products:productsReducer,
})

export default entitiesReducer;