import {http} from '../services/fetchService'


class userFetch{
    posts(onSucces){
        http.get("http://crud-api.hypetech.xyz/v1/posts", onSucces)
    }
    users(onSucces){
        http.get("http://crud-api.hypetech.xyz/v1/users", onSucces)
    }
    comments(onSucces){
        http.get("http://crud-api.hypetech.xyz/v1/comments", onSucces)
    }
}
export const userRequests = new userFetch();