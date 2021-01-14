import { environment } from "src/environments/environment"

const SESSION_TIMEOUT = 10 // in minutes
// const BASE_URL = 'http://tup-ais.test'
const BASE_URL = environment.production ? 'https://ais-tup.cf' : 'http://tup-ais.test'

const api = {
    login: `${BASE_URL}/oauth/token`,
    user: `${BASE_URL}/api/user`,
}
export { api, SESSION_TIMEOUT }