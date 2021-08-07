import { connect } from 'react-redux'
import Header from '../components/Header'
import { addTodo, undoLastAction, redoLastAction } from '../actions'

export default connect(null, { addTodo, undoLastAction, redoLastAction })(Header)
