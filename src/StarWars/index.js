import React, {useEffect, useState} from "react";
import axios from "axios";
import Character from "./components/Character";

function StarWarsContainer(props){

    const [characters, setCharacters] = useState([])
    
    useEffect(()=>{

        axios({ url: "https://swapi.dev/api/people"})
        .then(response=> setCharacters(response.data.results) ) 
        .catch(err=> console.log(err))

    },[])

    return (
        <div className="starwars-container">
            { characters.map( character=> <Character character={character} />) }
        </div>
    )
}

export default StarWarsContainer;