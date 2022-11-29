import {BrowserRouter as Router} from "react-router-dom";

import HelloWorld from "./components/HelloWorld";

export default function App() {
    return (
        <Router>
            <HelloWorld weight={12} animal="tests"/>
        </Router>
    );
}

