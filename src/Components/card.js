import '../styles/card.css'

const Card = (props) =>{

    const {name,power,age,image} = props.heroe

    return (
        <div>
            <div className='heroeImg' style={{
                backgroundImage: `url(${image})`
            }}></div>
            <h2>{name}</h2>
            <p>{age} ans</p>

            <h2>Power</h2>

            <ul>
                {power.map(pow=>{
                    return <li key={pow}>{pow}</li>
                })}
            </ul>
        </div>
    )
} 

export default Card