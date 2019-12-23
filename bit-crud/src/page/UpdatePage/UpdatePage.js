import React from 'react'
import {postService} from '../../services/postService'

class UpdatePost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      subtitle: "",
      image: "",
      text: ""
    }
  }
  componentDidMount() {
    let token = localStorage.getItem("currentUser")
    postService.fetchSinglePost(this.props.match.params.id, token)
        .then(result => this.setState({
          title: result.title,
          subtitle: result.subtitle,
          image: result.image,
          text: result.text
        }))
  }
  getTitle = (x) => {
    this.setState({title: x})
  }

  getSubtitle  = (x) => {
    this.setState({ subtitle: x })
  }

  getImage = (x) => {
    this.setState({ image: x })
  }

  getText = (x) => {
    this.setState({ text: x })
  }

  updatePost = () => {
    let data = {
        title: this.state.title,
        subtitle: this.state.subtitle,
        image: this.state.image,
        text: this.state.text
    }
    let token = localStorage.getItem("currentUser")

    postService.updatePost(this.props.match.params.id, data, token)
    this.props.history.push('/myposts')

}
}
export default UpdatePost
