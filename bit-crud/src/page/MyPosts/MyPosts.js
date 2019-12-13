import React from 'react'
import { postService } from '../../services/postService'
import MyPostCard from './MyPostCard'
import { getUserId } from '../../services/authServices';

class MyPosts extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            loading: false
        }
    }
    fetchPosts() {
        return postService.getPosts()
            .then(posts => {
                this.setState({
                    posts: posts.filter(post => post.userId === getUserId())
                });
            }
            )
    }


    componentDidMount() {
        this.fetchPosts()
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map((post) => {
                        return <MyPostCard title={post.title} />
                    })
                }
            </div >
        )
    }
}
export default MyPosts