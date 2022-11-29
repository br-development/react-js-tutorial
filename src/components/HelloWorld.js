import React from "react";
import {useLocation} from "react-router-dom";
import '../assets/styles.css'

function useQuery() {
    const {search} = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function HelloWorld() {
    let name = useQuery().get('name') ?? 'Anonym';
    let animals = ['cat', 'dog', 'monkey', 'cow'];

    return (<div className="red-text">
        Hello World, I'm {name}
        <ul>
            {animals.map((animal, index) => (
                <li key={`${animal}-${index}`}>{animal} {animal === 'cat' && '❤️'}</li>
            ))}
        </ul>
    </div>)
        ;
}