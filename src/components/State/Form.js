import {Component} from "react";

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState(
            {[name]: value},
            () => {
                this.validateField(name, value)
            });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'Email is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : 'Password is too short';
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    handleSubmit(e) {
        e.preventDefault()
        e.stopPropagation()

        if (this.state.formValid){
            alert(`
                Email: ${this.state.email},
                Mot de passe: ${this.state.password}
            `)
            this.props.handleEmail(this.state.email)
        }
    }

    render() {
        return (
            <form onSubmit={(event => this.handleSubmit(event))}>
                <h2>Sign up</h2>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input type="email"
                           required
                           name="email"
                           placeholder="Email"
                           value={this.state.email}
                           onChange={this.handleUserInput}  />
                    <div style={{color: 'red'}}>
                        {!this.state.emailValid && this.state.formErrors.email}
                    </div>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           name="password"
                           placeholder="Password"
                           value={this.state.password}
                           onChange={this.handleUserInput}  />
                    <div style={{color: 'red'}}>
                        {!this.state.passwordValid && this.state.formErrors.password}
                    </div>
                </div>
                <button type="submit" disabled={!this.state.formValid}>Sign up</button>
            </form>
        )
    }
}