import { http } from '../services/fetchService'
import { postsEndpoint } from '../shared/constants'
import { Post } from '../models/Post'

class PostService {

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