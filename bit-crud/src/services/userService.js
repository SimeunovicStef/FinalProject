import { http } from './fetchService'

class UserService {
    getSingleAuthor(id) {
        return http.get('http://crud-api.hypetech.xyz/v1/users/' + id)
            .then(result => result.firstName)
    }
}
export const userService = new UserService()