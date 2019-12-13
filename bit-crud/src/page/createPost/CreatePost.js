import React from 'react'
import Input from '../../components/input/Input'
import TextArea from '../../components/textArea/TextArea'
import SwitchButton from '../../components/SwitchButton/SwitchButton'

import {
    http
}

    from '../../services/fetchService'
import './CreatePost.css'

class CreatePost extends React.Component {





    onInputChange(name, value) {
        this.setState({
            [name]: value
        }

        )
    }

    onSaveClick() {
        const postInfo = {
            title: this.state.title,
            subtitle: this.state.subtitle,
            imageUrl: this.state.imageUrl,
            text: this.state.text
        }

        http.post("http://crud-api.hypetech.xyz/v1/posts", postInfo)
    }

    render() {
        return (<> <div className='createwraper'> <Input name='title' type='text' placeholder='Title' className='halfInpOne' /> <Input name='subtitle' type='text' placeholder='Subtitle' className='halfInpTwo' /> <Input name='imageUrl' type='text' placeholder='Image URL' className='' /> <SwitchButton /> <TextArea name='text' onChange={
            (name, value) => this.onInputChange(name, value)
        }

        /> <a class="waves-effect waves-light btn saveButton"
            text="Save" color="green" onClick={
                () => this.onSaveClick()
            }

        >SAVE</a> <a class="waves-effect waves-light btn deleteButton">DELETE</a> </div> </>)
    }
}

export default CreatePost