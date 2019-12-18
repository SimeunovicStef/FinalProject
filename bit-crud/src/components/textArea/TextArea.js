import React from 'react'
import './TextArea.css'

const TextArea = ({ onChange, name, value }) => {
    return (
        <textarea
            name={name}
            value={value}
            onChange={e => {
                onChange(name, e.target.value);
            }} className="textArea"> </textarea>
    )
}

export default TextArea