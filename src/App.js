import {BrowserRouter as Router} from "react-router-dom";

import HelloWorld from "./components/HelloWorld";
import PrintName from "./components/State/PrintName";
import Form from "./components/State/Form";

export default function App() {
    return (
        <Router>
            <HelloWorld weight={12} animal="tests"/>
            <PrintName/>
            <Form email={"test"}/>
        </Router>
    );
}

