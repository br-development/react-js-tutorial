import Form from "../State/Form";
import Profile from "../State/Profile";
import {useState} from "react";

export default function Index (){
    const [email, handleEmail] = useState('Anonym')

    return(
        <div id="index">
            <Form email={email} handleEmail={handleEmail}/>
            <Profile email={email}/>
        </div>
    )
}