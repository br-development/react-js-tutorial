import React from "react";
import { connect } from "react-redux";
import { changeUser } from "../../redux/actions/user";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "" };
    }

    updateInput = email => {
        this.setState({ email });
    };

    handleLogin = () => {
        // On imagine un call Ajax pour check le user et récupérer les infos
        let user = {
            username: this.state.email,
            email: this.state.email,
            token : 'token'
        }
        this.props.changeUser(user);
        this.setState({ email: "" });
    };

    render() {
        return (
            <div>
                <input
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.email}
                />
                <button onClick={this.handleLogin}>
                    Login
                </button>
            </div>
        );
    }
}

export default connect(
    null,
    { changeUser }
)(Login);