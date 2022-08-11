/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect} from "react";
import { useParams, Link } from 'react-router-dom'
import Cardpres from "../Components/cardpres";

const Heroe = () =>{
    const {slug} = useParams()
    const [hero,setHero] = useState(null)

    useEffect(()=> {
        fetchHero()
    },[])

    const fetchHero = async() =>{
        const response = await fetch(`http://localhost:5000/heroes/${slug}`)
        const data = await response.json()
        setHero(data)
    }

    return (
        <section>
            <h1><Link to={`/`}>Hero</Link></h1>
            {hero && <Cardpres hero={hero}/>}
        </section>
    )
}

export default Heroe

