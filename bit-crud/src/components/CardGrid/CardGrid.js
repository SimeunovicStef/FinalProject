import React from 'react'
import Card from '../card/Card'

class CardGrid extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      posts: []
    }
  }
  render() {
    const filterCard = this.props.posts.filter((element) => (element.title).toLowerCase().includes(this.props.search))
      return (
        <div>{
          filterCard.map(post => {
            return <Card userId={post.userId} key={post.id} title={post.title} src={post.imageUrl} description={post.text} id={post.id} />
          })}
        </div>
      )
  }
}
export default CardGrid

