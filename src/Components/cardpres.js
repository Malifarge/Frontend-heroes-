/* eslint-disable react-hooks/exhaustive-deps */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cardpres = (props) =>{
    const {slug,name,power,age,image,color,isAlive} = props.hero
    const navigate = useNavigate()
    const [status, setStatus] = useState(true)
    const [slugNew, setSlugNew] = useState(slug)
    const [nameNew, setNameNew] = useState(name)
    const [powerNew, setPowerNew] = useState(power)
    const [ageNew, setAgeNew] = useState(age)
    const [imageNew, setImageNew] = useState(image)
    const [colorNew, setColorNew] = useState(color)
    const [isAliveNew, setIsAliveNew] = useState(isAlive)
    const [arrayPowerNew, setArrayPowerNew] = useState([])


    const handleDeleteClick = async() =>{
         
        const request = await fetch(`http://localhost:5000/heroes/${slug}`, {
          method: 'DELETE'
        })
    
        const response = await request.json()
        console.log(response);
        navigate("/")

    }

    const handleEditClick = () =>{
        setStatus(false)
    }

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

        const request = await fetch(`http://localhost:5000/heroes/${slug}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(heroUpdate)
    })

    const response = await request.json()
    console.log(response);
    setStatus(true)
    navigate(`/${slugNew}`)
    window.location.reload(false)
    }

    return (
        <>
        {status ? <><div className='border  flex tel g-30 center' style={isAlive ? {borderColor: "black" }: {borderColor: "red"}}>
            <div className='heroeImg flex' style={{
                backgroundImage: `url(${image})`
            }}></div>
           <div>
                <h2 style={{
                    textDecorationColor: `${color}`
                }}>{name}</h2>
                <p>{age} ans</p>
           </div>

            <div>
                <h2><Link to={`/${slug}/power`}>Power</Link></h2>

                <ul>
                    {power.map(pow=>{
                        return <li key={pow}>{pow}</li>
                    })}
                </ul>
            </div> 

        </div> 
        <div  className="flex s-b mb-10">
                <button onClick={handleDeleteClick}>Delete</button>
                <button onClick={handleEditClick}>Edit</button>
            </div>
            </>
            : <form className="flex clmn g-30" onSubmit={handleSubmit}>

            <div className="flex g-30">
                <label htmlFor="slug">slug</label>
                <input type="text" value={slugNew} onChange={handlechangeSlug} name="slug" />
            </div>

            <div className="flex g-30">
                <label htmlFor="name">name</label>
                <input type="text" value={slugNew} onChange={handlechangeName} name="name" />
            </div>

            <div className="flex g-30">
                <label htmlFor="power">power</label>
                <input type="text" value={powerNew} onChange={handlechangePower} name="power" />
                <button onClick={handleArrayPowerClick} type="button">+</button>
            </div>
            
            <div className="flex g-30">
                <label htmlFor="color">color</label>
                <input type="text" value={colorNew} onChange={handlechangeColor} name="color" />
            </div>

            <div className="flex g-30">
                <label htmlFor="isAlive">isAlive</label>
                {isAliveNew ? <input type="checkbox" name="isAlive" onChange={handleCheck} checked /> : <input type="checkbox" name="isAlive" onChange={handleCheck} />}
            </div>
            
            <div className="flex g-30">
                <label htmlFor="age">age</label>
                <input type="text" value={ageNew} onChange={handlechangeAge} name="age" />
            </div>

            <div className="flex g-30">
                <label htmlFor="image">image</label>
                <input type="text" value={imageNew} onChange={handlechangeImage} name="image" />
            </div>
            
            <button type="submit">Submit</button>
            
        </form> }
        </>
    )
} 

export default Cardpres