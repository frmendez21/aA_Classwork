import {connect} from 'react-redux';
import { login } from '../actions/session_actions';
import SessionForm from './session_form';

const MSTP = (state, ownProps) => ({
    errors: state.errors.session, 
    formType: 'login'
})

const MDTP = dispatch => ({
    processForm: user => dispatch(login(user))
})

export default connect(MSTP, MDTP)(SessionForm);