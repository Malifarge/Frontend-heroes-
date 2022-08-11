/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect} from "react";
import { useParams,Link } from 'react-router-dom'

const Power = () =>{

    const {slug} = useParams()
    const [power,setPower] = useState([])
    const [powerNew, serPowerNew] = useState("")

    useEffect(()=> {
        fetchPower()
    },[])

    const fetchPower = async() =>{
        const response = await fetch(`http://localhost:5000/heroes/${slug}/power`)
        const data = await response.json()
        setPower(data)
    }

    const handleDeleteClick = async(power) =>{
         
        const request = await fetch(`http://localhost:5000/heroes/${slug}/power/${power}`, {
          method: 'DELETE'
        })
    
        const response = await request.json()
        console.log(response)

        window.location.reload(false)

    }

    const onChangeNewPower = e =>{
        serPowerNew(e.target.value)
    }

    const handleEditSubmit = async e =>{

        e.preventDefault()

        const powerUpdate = [powerNew]

        const request = await fetch(`http://localhost:5000/heroes/${slug}/power`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(powerUpdate)
    })

    const response = await request.json()
    console.log(response);

    window.location.reload(false)

    
    }
    

    return(
        <section className="flex clmn center">
            <h1><Link to={`/${slug}`}>{slug}</Link>'s Power</h1>
            <article className="w-300">
                <ul className="flex clmn s-b">
                    {power.map(pow=>{
                    return <li className="flex s-b" key={pow}>{pow} <button onClick={()=> handleDeleteClick(pow)}>Delete</button></li>
                    })}
                </ul>

                <div>
                    <form onSubmit={handleEditSubmit} className="flex s-b center">
                        <label htmlFor="power">Power</label>
                        <input type="text" name="power" onChange={onChangeNewPower} />
                        <button type="submit">More Power</button>
                    </form>
            </div>
            </article>
            
        </section>
    )
}

export default Power