import TokenService from './token-service'
import config from '../config'

const EntryApiService = {
    getEntries() {
        return fetch(`${config.API_ENDPOINT}/entries`, {
        headers: {
        },
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    getEntry(entryId) {
        return fetch(`${config.API_ENDPOINT}/entries/${entryId}`, {
        headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    }
}

export default EntryApiService