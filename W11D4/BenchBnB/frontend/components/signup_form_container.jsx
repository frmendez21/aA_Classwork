import {connect} from 'react-redux';
import { signup } from '../actions/session_actions';
import SessionForm from './session_form';
// debugger
const MSTP = (state, ownProps) => ({
    errors: state.errors.session, 
    formType: 'signup'
})

const MDTP = dispatch => ({
    processForm: user => dispatch(signup(user))
})

export default connect(MSTP, MDTP)(SessionForm);