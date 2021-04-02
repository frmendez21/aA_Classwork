import React from 'react';
import {Link} from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => {
                this.props.history.push('/')
            })
    };


    update(key) {
        return e => this.setState({[key]: e.currentTarget.value })
    };

    render() {
        
        const header = this.props.formType[0].toUpperCase() + this.props.formType.slice(1);

        const link = this.props.formType === 'login' ? <Link to="/signup">Sign Up</Link> : <Link to="/login">Log In</Link>

        const errors = this.props.errors.map((err, idx)=> (
            <li key={idx}>{err}</li>
        ));

            
        return (
        <div>
            <h3>{header}</h3>
            <form onSubmit={this.handleSubmit}>
                <label>Username:
                    <input 
                        type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                    />
                </label>
                <label>Email:
                    <input 
                        type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                    />
                </label>
                <label>Password:
                    <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                    />
                </label>
                <button type="submit">{this.props.formType}</button>
            </form>
            <ul>
                {errors}
            </ul>
            {link}
        </div>
        )
    }
}

export default SessionForm;