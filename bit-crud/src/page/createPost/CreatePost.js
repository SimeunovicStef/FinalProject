import React from 'react'
import Input from '../../components/input/Input'
import TextArea from '../../components/textArea/TextArea'
import SwitchButton from '../../components/SwitchButton/SwitchButton'

import {
    http
}

    from '../../services/fetchService'
import './CreatePost.css'
import {postService} from '../../services/postService'


class CreatePost extends React.Component {


    state = {
        status: "",
        title: "",
        subtitle: "",
        photo: "",
        content: ""
    }




    onInputChange(name, value) {
        this.setState({
            [name]: value
        }

        )
    }

    onSaveClick() {
        let postInfo = {
            isPublic: this.state.status,
            title: this.state.title,
            subtitle: this.state.subtitle,
            imagconsteUrl: this.state.photo,
            text: this.state.content
        }

        http.post("http://crud-api.hypetech.xyz/v1/posts", postInfo)
    }


    deletePost = () => {
        let data = {
            // sid: this.state.sid,
            // title: this.state.title,
            // subtitle: this.state.subtitle,
            // imageUrl: this.state.imageUrl,
            // text: this.state.text
        
        }
        let token = localStorage.getItem("currentUser")
        postService.deleteSinglePost(this.props.match.params.id, data, token)
        this.props.history.push('/myposts')
    }

    render() {
        return (<> <div className='createwraper'>
             <Input onChange={(name, value) => this.onInputChange(name, value)} name='title' type='text' placeholder='Title' className='halfInpOne' />
              <Input onChange={(name, value) => this.onInputChange(name, value)} name='subtitle' type='text' placeholder='Subtitle' className='halfInpTwo' />
               <Input onChange={(name, value) => this.onInputChange(name, value)} name='imageUrl' type='text' placeholder='Image URL' className='' />
                <SwitchButton /> 
        <TextArea onChange={(name, value) => this.onInputChange(name, value)} name='text' onChange={
            (name, value) => this.onInputChange(name, value)
        }

        /> 
        <a class="waves-effect waves-light btn saveButton"
            text="Save" color="green" onClick={
                () => this.onSaveClick()
            }

        >SAVE</a> <a class="waves-effect waves-light btn"  onClick={()=> this.deletePost()}>DELETE</a> </div> </>)
    }
}

export default CreatePost