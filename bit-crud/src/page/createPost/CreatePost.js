import React from 'react'
import Input from '../../components/input/Input'
import TextArea from '../../components/textArea/TextArea'
import './CreatePost.css'
import {postService} from '../../services/postService'
import ButtonSD from '../../components/ButtonSD/ButtonSD'

class CreatePost extends React.Component {

    state = {
        title: '',
        subtitle: '',
        image: '',
        text: ''
    }

    getTitle = (x) => {
        this.setState({ title: x })
    }

    getSubtitle = (x) => {
        this.setState({ subtitle: x })
    }

    getImage = (x) => {
        this.setState({ image: x })
    }

    getText = (x) => {
        this.setState({ text: "bla" })
    }

    saveClick = () => {
        const data = {
            isPublic: true,
            title: this.state.title,
            subtitle: this.state.subtitle,
            image: this.state.image,
            text: "bla bla"
        }
        let token = localStorage.getItem("currentUser")
        postService.createPost(data, token)
            .then(() => {
                setTimeout(() => this.props.history.push("/myposts"), 1000)
            })
    }
    deletePost = () => {
        let data = {}
        let token = localStorage.getItem("currentUser")
        postService.deleteSinglePost(this.props.match.params.id, data, token)
        this.props.history.push('/myposts')
    }

    render() {
        return (
        <> 
        <div className='createwraper'>
            <Input onChange={this.getTitle} name='title' type='text' placeholder='Title' className='halfInpOne' />
            <Input onChange={this.getSubtitle} name='subtitle' type='text' placeholder='Subtitle' className='halfInpTwo' />
            <Input onChange={this.getImage} name='imageUrl' type='text' placeholder='Image URL' className='' />
            <TextArea placeholder='Textarea' onChange={this.getText} name='text' /> 
            <ButtonSD title='Save' onClick={this.saveClick} className='Save'  /> 
            <ButtonSD title='Delete' className='Delete' />
        </div> 
        </>)
    }
}

export default CreatePost