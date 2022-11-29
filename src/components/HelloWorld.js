import React from "react";
import {useLocation} from "react-router-dom";
import '../assets/styles.css'

function useQuery() {
    const {search} = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function showAlert(animal){
    console.log(`Hello ${animal}`)
}

export default function HelloWorld() {
    let name = useQuery().get('name') ?? 'Anonym';
    let animals = ['cat', 'dog', 'monkey', 'cow'];

    return (<div className="red-text">
        Hello World, I'm {name}

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