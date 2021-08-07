import { connect } from 'react-redux'
import Header from '../components/Header'
import { addTodo, undoLastAction, redoLastAction } from '../actions'

const mapStateToProps = state => ({
    isUndoDisabled: state.past.length === 0,
    isRedoDisabled: state.future.length === 0
})

export default connect(mapStateToProps, 
    { addTodo, undoLastAction, redoLastAction })(Header)
