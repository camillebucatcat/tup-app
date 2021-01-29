import { environment } from "src/environments/environment"

const SESSION_TIMEOUT = 10 // in minutes
// const BASE_URL = 'http://tup-ais.test'
const BASE_URL = environment.production ? 'https://ais-tup.cf' : 'http://localhost:3000'

const api = {
    login: `${BASE_URL}/oauth/token`,
    me: `${BASE_URL}/api/user`,
    user: {
        profile: `${BASE_URL}/api/user`,
        feed: `${BASE_URL}/api/feed`,
    }
}
export { api, SESSION_TIMEOUT }