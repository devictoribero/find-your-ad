import {GET__INFLUENCERS__REQUEST, GET__INFLUENCERS__SUCCESS} from './types'

const initialState = {
  results: []
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case GET__INFLUENCERS__REQUEST:
      return {
        results: []
      }

    case GET__INFLUENCERS__SUCCESS:
      console.log(action)
      return {
        results: action.payload.results
      }

    default:
      return state
  }
}
export default reducer