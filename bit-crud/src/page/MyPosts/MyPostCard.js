import React from 'react'
import './MyPost.css'
import { Link, withRouter } from 'react-router-dom'



const MyPostCard = (props) => {
    return (
        <>
         <Link to='/updatepost'>
            <li className='userCards'>{props.title}  <i class="material-icons editButton">edit</i>
            </li>
            </Link>
        </>
    )

}

export default MyPostCard