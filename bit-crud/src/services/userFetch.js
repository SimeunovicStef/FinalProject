import { http } from './fetchService'


class userFetch {
    posts(onSucces) {
        return http.get("http://crud-api.hypetech.xyz/v1/posts", onSucces)
    }
    users(onSucces) {
        return http.get("http://crud-api.hypetech.xyz/v1/users", onSucces)
    }
    comments(onSucces) {
        return http.get("http://crud-api.hypetech.xyz/v1/comments", onSucces)
    }
    singlePost(postId, onSucces){
        return http.get(`http://crud-api.hypetech.xyz/v1/posts/${postId}`, onSucces)
    }
    fetchSinglePost = (id, token) => {
        const requestUrl = `http://crud-api.hypetech.xyz/v1/posts/${id}`
        return http.get(requestUrl)
    }
    updatePost(postId,data, onSucces){
        return http.put(`http://crud-api.hypetech.xyz/v1/posts/${postId}`,data, onSucces)
}}
export const userRequests = new userFetch();