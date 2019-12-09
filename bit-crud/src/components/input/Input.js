import React from 'react'
import PropTypes from 'prop-types'

// import './Input.css'

const Input = (props) => (<input name={props.name} type={props.type} placeholder={props.placeholder} className={props.className} onChange={(event) => props.onChange(event.target.value)} value={props.value} />)
Input.defaultProps = {
    onChange: () => { }
    /*ili: f => f, */
}

Input.propsTypes = {
    onChange: PropTypes.func,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string
}
export default Input