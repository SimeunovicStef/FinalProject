import React from 'react'
import './Icon.css'

const Icon = (props) => {
    return (<i className={
        "medium material-icons " + props.className
    }

    >lock</i>)
}

export default Icon