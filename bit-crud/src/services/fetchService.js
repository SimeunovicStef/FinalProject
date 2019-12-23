import requestHeader from '../shared/constants'

class FetchService {
    get(url) {
        return fetch(url, {
            method: 'GET',
            headers: requestHeader
        })
            .then(response => response.json())
    }

    post(url, data, token) {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'x-api-key': 'B1tD3V'}
        })
            .then(response => response.json())
    }
}

export const http = new FetchService()