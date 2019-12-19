import requestHeader from '../shared/constants'

class FetchService {
    get(url) {
        return fetch(url, {
            method: 'get',
            headers: requestHeader
        })
            .then(response => response.json())
    }

    post(url, data) {
        return fetch(url, {
            method: 'post',
            body: JSON.stringify(data),
            headers: requestHeader
        })
            .then(response => response.json())
    }
    put (url, data) {
        return fetch(url, {
            method: 'put',
            body: JSON.stringify(data),
            headers:requestHeader
        })
        .then(response=> response.json())
    }
}

export const http = new FetchService()