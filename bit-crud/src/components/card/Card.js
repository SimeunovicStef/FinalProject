import React from 'react'
import './Card.css'

const Card = (props) => {
    console.log(props);

    return (<div className="card">
        <div className="cardText">
            <div className="card-image">
                <img className='responsive-img' src={props.src} />
                <span className="card-title"> {props.title}</span>
            </div>
            <div className="card-content ">
                <p> {props.description}</p>
            </div>
        </div>
    </div>)
}

export default Card