
import { Link } from "react-router-dom";
 
import '../styles/card.css'

const Card = (props) =>{

    const {slug,name,power,age,image,color,isAlive} = props.heroe

    return (
        <div className='border ' style={isAlive ? {borderColor: "black" }: {borderColor: "red"}}>
            <div className='heroeImg w-300' style={{
                backgroundImage: `url(${image})`
            }}></div>
            <h2 style={{
                textDecorationColor: `${color}`
            }}><Link to={`/${slug}`}>{name}</Link></h2>
            <p>{age} ans</p>

            <h2><Link to={`/${slug}/power`}>Power</Link></h2>

            <ul>
                {power.map(pow=>{
                    return <li key={pow}>{pow}</li>
                })}
            </ul>

        </div>
    )
} 

export default Card