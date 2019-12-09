import requestHeader from '../shared/constants'
import registerEndpoint from '../shared/constants'

class FetchService {
    get(url) {
        return fetch(url, {
            method: 'get'
        })
            .then(response => response.json())
    }
}

export const http = new FetchService()