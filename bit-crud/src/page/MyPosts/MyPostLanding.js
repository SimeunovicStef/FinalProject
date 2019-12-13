import React from "react";
import Title from "../../components/title/Title"
import './MyPost.css'
import MyPosts from "./MyPosts";
import { Link, withRouter } from 'react-router-dom'


const MyPostLanding = () => (
    <div className="container">
        <Link to='/createpost'>
            <a class="waves-effect waves-light btn newPost">NEW POST</a>
        </Link>
        <Title title="AllPosts" />

        <MyPosts />

    </div>
);

export default MyPostLanding