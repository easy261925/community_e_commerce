import {
  SERVICE,
  SERVICE_SUCCESS,
  SERVICE_FAILURE
} from './types'

function service() {
  return {
    type: SERVICE
  }
}

function serviceSuccess() {
  return {
    type: SERVICE_SUCCESS
  }
}

function serviceFailure(message) {
  return {
    type: SERVICE_FAILURE,
    payload: message
  }
}

export {
  service,
  serviceSuccess,
  serviceFailure
}
