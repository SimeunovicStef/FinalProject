import { http } from "./fetchService";
import { commentsEndpoint } from '../shared/constants'
import { Comment } from '../models/Comment'

class CommentsService {
    getComments() {
        return http.get(commentsEndpoint)
            .then(comments => {
                return comments.map((comment) => {
                    return new Comment(comment)
                })
            })
    }

    getPostComments(postId) {
        return http.get('/posts/' + postId + '/comments')
            .then(comments => {
                return comments.map((comment) => {
                    return new Comment(comment)
                })
            })
    }
}
export const commentsService = new CommentsService()