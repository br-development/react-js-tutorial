import React from "react";

import {Provider} from "react-redux";
import store from "./redux/store";

import Profile from "./components/Redux/Profile";
import Login from "./components/Redux/Login";

export default function App() {
    return (
        <div>
            <Provider store={store}>
                <Profile/>
                <Login/>
            </Provider>,
        </div>
    );

}