import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import redoundo from './redoundo'

const rootReducer = redoundo(combineReducers({
  todos,
  visibilityFilter
}))

export default rootReducer
