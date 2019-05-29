/* globals fetch */
//import 'isomorphic-fetch'
import {
  GET__INFLUENCERS__REQUEST,
  GET__INFLUENCERS__FAIL,
  GET__INFLUENCERS__SUCCESS,
} from './types'

const fetchInfluencers = () => {
  return Promise.resolve({
    results: [
      {
        id: 0,
        name: 'Victor',
        lastName: 'Ribero',
        location: 'Barcelona',
        socials: [
          {
            name: 'Instragram',
            userName: 'victorriberoguasch',
            followers: 1500
          },
          {
            name: 'Twitter',
            userName: 'victorException',
            followers: 500
          }
        ]
      },
      {
        id: 0,
        name: 'Kevin',
        lastName: 'Callejas',
        location: 'Vilassar',
        socials: [
          {
            name: 'Instragram',
            userName: 'kevincallejas93',
            followers: 200
          },
          {
            name: 'Twitter',
            userName: 'kevitodev',
            followers: 1700
          }
        ]
      }
    ]
  })
  //return fetch().then(response => response.json())
}

function getInfluencersLoading() {
  return {
    type: GET__INFLUENCERS__REQUEST
  }
}

function fail(error) {
  return {
    type: GET__INFLUENCERS__FAIL,
    payload: {results: []},
    error
  }
}

function success(response) {
  return {
    type: GET__INFLUENCERS__SUCCESS,
    payload: { results: response.results}
  }
}

// SideEffect
export function getInfluencers() {
  return function(dispatch) {
    dispatch(getInfluencersLoading())

    return fetchInfluencers()
      .then(response => dispatch(success(response)))
      .then(error => dispatch(fail(error)))
  }
}

export default { getInfluencers }