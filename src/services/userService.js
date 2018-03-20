import {
  API
} from '../constants'
import rest from '../utils/';

const URL = `${API}/user`

const get = async (userId, token) => {
  return await rest.get(userId, token)(
    `${URL}/${userId}`
  )
}

export default {
  get
}
