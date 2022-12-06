import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Form from "./components/State/Form";
import {Component} from "react";
import Profile from "./components/State/Profile";
import Header from "./components/Router/Header";
import SubPage from "./components/Router/SubPage";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {email: 'Anonym'}
        this.handleEmail = this.updateEmail.bind(this)
    }

    updateEmail(email) {
        this.setState({email: email})
    }

    render() {
        return (
            <Router>
                <Header/>
                <Routes>
                    <Route path={"/"} element={(<Form email={this.state.email} handleEmail={this.handleEmail}/>)}/>
                    <Route path={'/sub-page'} element={(<SubPage/>)}/>
                </Routes>
                <Profile email={this.state.email}/>
            </Router>
        );
    }
}

