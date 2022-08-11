/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";

import Card from "../Components/card";

import '../styles/global.css'

const Home = () =>{
    const [heroes,setHeroes]= useState([])
    const [slugNew, setSlugNew] = useState("")
    const [nameNew, setNameNew] = useState("")
    const [powerNew, setPowerNew] = useState("")
    const [ageNew, setAgeNew] = useState("")
    const [imageNew, setImageNew] = useState("")
    const [colorNew, setColorNew] = useState("")
    const [isAliveNew, setIsAliveNew] = useState("")
    const [arrayPowerNew, setArrayPowerNew] = useState([])


    const fetchHeroes = async () => {
        const response = await fetch("http://localhost:5000/heroes")
        const data = await response.json()
        setHeroes(data)
      }

    useEffect(()=>{
        fetchHeroes()
    },[])

    const handlechangeSlug = e => {
        const {value} = e.target
        setSlugNew(value)
    }

    const handlechangeName = e => {
        const {value} = e.target
        setNameNew(value)
    }

    const handlechangePower = e => {
        const {value} = e.target
        setPowerNew(value)
    }

    const handlechangeColor = e => {
        const {value} = e.target
        setColorNew(value)
    }

    const handlechangeAge = e => {
        const {value} = e.target
        setAgeNew(value)
    }

    const handlechangeImage = e => {
        const {value} = e.target
        setImageNew(value)
    }

    const handleArrayPowerClick = () =>{
        const Array = [...arrayPowerNew,powerNew]
        setArrayPowerNew(Array)
        setPowerNew("")
    }

    const handleCheck = e =>{
        setIsAliveNew(e.target.checked)
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const heroUpdate = { 
             slug: slugNew,
            name: nameNew,
            power: arrayPowerNew,
            color: colorNew,
            isAlive: isAliveNew,
            age: ageNew,
            image: imageNew
            
        }

        const request = await fetch(`http://localhost:5000/heroes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(heroUpdate)
    })
    const response = await request.json()
    console.log(response);
    window.location.reload(false)
    }

    return(
       <section>
            <h1>Heroes'list</h1>
            <article className="flex g-30 overflow">
                {heroes.map(heroe=>{
                return <Card key={heroe.slug} heroe={heroe}/>
                 })}
            </article>
            
            <article className="flex clmn center">

                <h2>New hero</h2>

                <form className="flex clmn g-30 center" onSubmit={handleSubmit}>

                    <div className="flex s-b g-30 tel">
                        <label htmlFor="slug">slug</label>
                        <input type="text" onChange={handlechangeSlug} name="slug" />
                    </div>

                    <div className="flex s-b g-30 tel ">
                        <label htmlFor="name">name</label>
                        <input type="text" onChange={handlechangeName} name="name" />
                    </div>

                    <div className="flex s-b g-30 tel">
                        <label htmlFor="power">power</label>
                        <input type="text" value={powerNew} onChange={handlechangePower} name="power" />
                        <button onClick={handleArrayPowerClick} type="button">+</button>
                    </div>

                    <div className="flex s-b g-30 tel">
                        <label htmlFor="color">color</label>
                        <input type="text" onChange={handlechangeColor} name="color" />
                    </div>

                    <div className="flex s-b g-30 tel">
                        <label htmlFor="isAlive">isAlive</label>
                        <input type="checkbox" name="isAlive" onChange={handleCheck} />
                    </div>

                    <div className="flex s-b g-30 tel">
                        <label htmlFor="age">age</label>
                        <input type="text" onChange={handlechangeAge} name="age" />
                    </div>

                    <div className="flex s-b g-30 tel">
                        <label htmlFor="image">image</label>
                        <input type="text" onChange={handlechangeImage} name="image" />
                    </div>

                    <button type="submit">Submit</button>

                </form>

            </article>

       </section>
    )
}

export default Home