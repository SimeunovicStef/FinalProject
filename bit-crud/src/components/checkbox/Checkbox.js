import React from 'react'

const Checkbox = (props) => {
    const onChangeHandler = (event) => {
        props.onChange(event.target.checked)
    }

    return (
        <label className={props.className}>
            <input type='checkbox' onChange={onChangeHandler} />
            <span>{props.label}</span>
        </label>
    )
}

export default Checkbox