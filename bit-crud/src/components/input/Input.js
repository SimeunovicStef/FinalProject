import React from 'react'
import PropTypes from 'prop-types'
// import './Input.css'

const Input = (props) => (
    <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        onChange={props.onChange}
        value={props.value}
    />
)


export default Input