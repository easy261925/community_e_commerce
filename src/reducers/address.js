import { FETCH_ADDRESSES, FETCH_ONE_ADDRESS, RECEIVE_ONE_ADDRESS, RECEIVE_ADDRESSES, FETCH_ADDRESSES_FAILURE, FETCH_ONE_ADDRESS_FAILURE, POST_ADDRESS, POST_ADDRESS_SUCCESS, POST_ADDRESS_FAILURE } from "../actions/types";

const initialAddress = {
  isFetchingAddress: false,  // 正在获取地址
  address: {},
  fetchOneErrorMessage: "",
  isFetchingAddresses: false, // 正在获取全部地址
  addresses: [],
  fetchAllErrorMessage: "",
  isPostingAddress: false, // 正在创建地址信息
  postErrorMessage: ""
}

export default (state = initialAddress, action = {}) => {
  switch (action.type) {
    // 获取一条地址信息
    case FETCH_ONE_ADDRESS:
      return {
        ...state,
        isFetchingAddress: true,
        fetchOneErrorMessage: "",
        address: {}
      }
    // success
    case RECEIVE_ONE_ADDRESS:
      return {
        ...state,
        isFetchingAddress: false,
        address: action.payload
      }
    case FETCH_ONE_ADDRESS_FAILURE:
      return {
        ...state,
        isFetchingAddress: false,
        fetchOneErrorMessage: action.payload
      }
    // 获取全部地址信息
    case FETCH_ADDRESSES:
      return {
        ...state,
        isFetchingAddresses: true,
        fetchAllErrorMessage: false,
        fetchAllErrorMessage: ""
      }
    case RECEIVE_ADDRESSES:
      return {
        ...state,
        isFetchingAddresses: false,
        addresses: action.payload
      }
    case FETCH_ADDRESSES_FAILURE:
      return {
        ...state,
        isFetchingAddresses: false,
        fetchAllErrorMessage: action.payload
      }
    case POST_ADDRESS:
      return {
        ...state,
        isPostingAddress: true,
        postErrorMessage: ""
      }
    case POST_ADDRESS_SUCCESS:
      return {
        ...state,
        isPostingAddress: false
      }
    case POST_ADDRESS_FAILURE:
      return {
        ...state,
        isPostingAddress: false,
        postErrorMessage: action.payload
      }
    default:
      return state
  }
}
