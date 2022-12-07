import {RouterProvider, createBrowserRouter} from "react-router-dom";

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
        const router = createBrowserRouter([
            {
                path: "/",
                element: <Form email={this.state.email} handleEmail={this.handleEmail}/>,
            },
            {
                path: '/sub-page',
                element: <SubPage/>
            }
        ]);
        return (
            <div>
                <RouterProvider router={router}/>
                <Profile email={this.state.email}/>
            </div>
        );
    }
}

