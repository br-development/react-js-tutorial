import {Component} from "react";
import {Link} from "react-router-dom";

export default class Header extends Component{
    render() {
        return(
            <nav>
                <Link to={"/"}>Index</Link>
                <Link to={"/sub-page"}>Sub page</Link>
            </nav>
        )
    }
}