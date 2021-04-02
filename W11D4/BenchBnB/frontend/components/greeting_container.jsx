import { connect } from 'react-redux';
import { logout } from '../actions/session_actions'
import Greeting from "./greeting";
const MSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const MDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(MSTP, MDTP)(Greeting);