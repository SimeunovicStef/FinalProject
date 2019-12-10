import React from 'react'
import './Card.css'

const Card = (props) => {
    console.log(props);

    return (<div className="row"> <div className="col s12 m6"> <div className="card"> <div className="card-image"> <img src={
        props.src
    }

    /> <span className="card-title"> {
        props.title
    }

        </span> </div> <div className="card-content"> <p> {
            props.description
        }

        </p> </div> </div> </div> </div>)
}

export default Card