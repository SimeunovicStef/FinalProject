import React from 'react'
import './Button.css'

const Button = (props) => {
    return (<button className={props.className}> {props.title}</button>)
}

export default Button