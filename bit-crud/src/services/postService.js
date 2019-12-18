import { http } from '../services/fetchService'
import { postsEndpoint } from '../shared/constants'
import { Post } from '../models/Post'

class PostService {
    

    deleteSinglePost  = (id,data,token) => {
        const url = `http://crud-api.hypetech.xyz/v1/posts/${id}`
        return http.post(url,data,token,'DELETE')
    } 
    getPosts() {

        return http.get(postsEndpoint)
            .then(posts => {
                return posts.map((post) => {
                    return new Post(post)
                })
            })
            

    }


}
export const postService = new PostService()