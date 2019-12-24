import React from 'react'
import './MyPost.css'
import {Link} from 'react-router-dom'


const MyPostCard = (props) => {

    const id = props.data

    return (
        <>
            <li className='userCards'>{props.title}  <Link to={`/updatepost/${id}`}><i class="material-icons editButton">edit</i></Link>
            </li>
        </>
    )

}

export default MyPostCard