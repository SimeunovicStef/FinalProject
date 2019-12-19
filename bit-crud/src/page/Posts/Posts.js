import React from 'react'
import Card from '../../components/card/Card'
import Title from '../../components/title/Title'
import { postService } from '../../services/postService'
import SearchBar from '../../components/search/Search'


class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            loading: true,
            searchQuery: "",
        }
    }
    componentDidMount() {
        postService.getPosts()
            .then((posts) => {
                this.setState({ posts })
            })
    }

    getSearchQuery = (searchQuery) => {
        this.setState({ searchQuery })

    }
    // const filteredPosts = this.props.posts.filter((element) => (element.title + element.subtitle + element.text).toLowerCase().includes(this.props.searchQuery))
    
    render() {

        return (
            <>
                <Title title='All posts' />
                <SearchBar className="searchBar" onChange={this.getSearchQuery} />
                <div className='row'>
                    {this.state.posts.map((post) => {
                        return <Card searchQuery={this.state.searchQuery} userId={post.userId} key={post.id} title={post.title} src={post.imageUrl} description={post.text} id={post.id} />
                    })}
                </div>
            </>
        )
    }
}
export default Posts