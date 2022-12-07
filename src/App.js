import Header from "./components/Router/Header";
import {Outlet} from 'react-router-dom';

export default function App() {
    return (
        <div>
            <Header/>
            <div id="detail">
                <Outlet />
            </div>
        </div>
    );

}