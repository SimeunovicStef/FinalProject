import React from 'react'

// import './Input.css'

const Input = (props) => (<input name={
    props.name
}

    type={
        props.type
    }

    placeholder={
        props.placeholder
    }

    className={
        props.className
    }

/>)
export default Input