import { combineReducers } from 'redux'
import influencersReducer from './influencers'

export default combineReducers({
  influencers: influencersReducer
})