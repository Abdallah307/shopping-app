import {combineReducers} from 'redux'
import entitiesReducer from './reducers/entitiesReducer'
//root reducer
const reducer = combineReducers({
   entities:entitiesReducer,
})

export default reducer;