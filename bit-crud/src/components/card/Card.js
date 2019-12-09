import React from 'react'

const Card = (props) => {
    return (
        <div class="row">
            <div class="col s12 m6">
                <div class="card">
                    <div class="card-image">
                        <img src={props.src} />
                        <span class="card-title">{props.title}</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red"></a>
                    </div>
                    <div class="card-content">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card 