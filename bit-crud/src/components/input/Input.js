import React from 'react'

const Input = (props) => {
    return (
        <input name={props.name} type={props.type} placeholder={props.placeholder} className={props.className}></input>
    )
}

export default Input