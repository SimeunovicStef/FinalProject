import React from 'react'
import Card from '../../components/card/Card'
import Title from '../../components/title/Title'
import { postService } from '../../services/postService'

class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postService.getPosts()
            .then((posts) => {
                this.setState({ posts })
            })
    }


    render() {

        console.log(this.state.posts);

        return (
            <>
                <Title title='All posts' />
                {this.state.posts.map((post) => {
                    return <Card key={post.id} title={post.title} src={post.imageUrl} description={post.text} />
                })}
            </>
        )
    }
}
export default Posts