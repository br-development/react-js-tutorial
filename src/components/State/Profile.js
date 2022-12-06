import {Component} from "react";

export default class Profile extends Component{
    render() {
        return (
            <div className={this.props.email === 'Anonym' && 'd-none'}>
                <h1>Profile</h1>
                Your logged as {this.props.email}
            </div>
        )
    }
}