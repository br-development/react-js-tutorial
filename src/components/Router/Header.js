import {Link} from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <Link to={"/"}>Index</Link>
            <Link to={"/sub-page"}>Sub page</Link>
        </nav>
    )
}