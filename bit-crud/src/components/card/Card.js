import React from 'react'
import './Card.css'

const Card = (props) => {
    console.log(props);

    return (<div className="card">
        <div className="cardText">
            <div className="card-image">
                <img className='responsive-img' src={props.src} />
            </div>
            <div className="card-content ">
                <h6 className="card-title"> {props.title}</h6>
                <p> {props.description}</p>
            </div>
        </div>
    </div>)
}

export default Card