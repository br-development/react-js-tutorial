import {useState} from 'react';

export default function PrintName(){
    let [name, updateName] = useState('Anon');

    return(<div>
        <h1>Hello {name}</h1>
        <input type="text" value={name} onChange={(e) => {updateName(e.target.value)}}/>
    </div>);
}