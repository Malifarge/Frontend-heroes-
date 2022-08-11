/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";

import Card from "../Components/card";

import '../styles/global.css'

const Home = () =>{
    const [heroes,setHeroes]= useState([])


    const fetchHeroes = async () => {
        const response = await fetch("http://localhost:5000/heroes")
        const data = await response.json()
        setHeroes(data)
      }

    useEffect(()=>{
        fetchHeroes()
    },[])

    return(
       <section>
            <h1>Heroes'list</h1>
            <article className="flex g-30 overflow">
                {heroes.map(heroe=>{
                return <Card key={heroe.slug} heroe={heroe}/>
                 })}
            </article>
       </section>
    )
}

export default Home