import {
  rest
} from '../utils/';
import {
  API
} from '../constants';

const URL = `${API}/user`

const getDetailByGoodId = async (userId, token, goodId) => {
  return await rest.get(userId, token)(
    `${URL}/${userId}/cartDetail/good/${goodId}`
  )
}

const post = async (userId, token, goodId, count) => {
  return await rest.post(userId, token)(
    `${URL}/${userId}/cart`,
    {
      goodId: goodId,
      count: count
    }
  )
}

export default {
  getDetailByGoodId,
  post
}
