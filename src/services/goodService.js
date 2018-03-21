import axios from 'axios';
import {
  API
} from '../constants';

const URL = `${API}/goods`

const search = async (page = 1, rows = 10, good) => {
  console.log('service')
  console.log(good.goodName)
  if (good) {
    return await axios.get(URL, {
      params: {
        page: page,
        rows: rows,
        goodId: good.goodId,
        goodName: good.goodName,
        categoryId: good.categoryId
      }
    })
  } else {
    return await axios.get(URL, {
      page: page,
      rows: rows
    })
  }
}

export default {
  search
}
