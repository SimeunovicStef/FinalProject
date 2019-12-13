import React from 'react'
import './MyPost.css'


const MyPostCard = (props) => {
    return (
        <>
            <li className='userCards'>{props.title}  <i class="material-icons editButton">edit</i>
            </li>
        </>
    )

}

export default MyPostCard