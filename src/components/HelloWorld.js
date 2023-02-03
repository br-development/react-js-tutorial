import React from "react";
import {useLocation} from "react-router-dom";
import '../assets/styles.css'
import helloUser from "../services/helloUser";

function useQuery() {
    const {search} = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function showAlert(animal){
    console.log(`Hello ${animal}`)
}

export default function HelloWorld() {
    let animals = ['cat', 'dog', 'monkey', 'cow'];

    return (<div className="red-text" data-testid="container">
        {helloUser(useQuery().get('name'))}

        <button onClick={(e) => {console.log(e)}}>click</button>

        <ul>
            {animals.map((animal, index) => (
                <li onClick={() => {
                    showAlert(animal)
                }} key={`${animal}-${index}`}>{animal} {animal === 'cat' && '❤️'}</li>
            ))}
        </ul>
    </div>)
        ;
}