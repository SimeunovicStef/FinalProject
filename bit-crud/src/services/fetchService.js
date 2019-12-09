import requestHeader from '../shared/constants'
import registerEndpoint from '../shared/constants'

class FetchService {
    get(url) {
        return fetch(url, {
            method: 'get',
            headers: requestHeader
        })
            .then(response => response.json())
    }

    post(url) {
        return fetch(url, {
            method: 'post',
            headers: requestHeader
        })
        .then(response => response.json())
    }
}

export const http = new FetchService()