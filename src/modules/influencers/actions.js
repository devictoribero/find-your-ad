import {
  GET__INFLUENCERS__REQUEST,
  GET__INFLUENCERS__FAIL,
  GET__INFLUENCERS__SUCCESS,
} from './types'
import {bbddInfluencers} from './mocks'

const fetchInfluencers = (params) => {
  const influencers = bbddInfluencers
    .filter(influencer => {
      if (
        influencer.socials[0].followers >= params.instagram.minFollowers
        && influencer.socials[0].followers >= params.twitter.minFollowers
        && influencer.socials[1].followers <= params.instagram.maxFollowers
        && influencer.socials[1].followers <= params.instagram.maxFollowers
      ) {
        return influencer
      }

      return null;
    })

  return Promise.resolve({results: influencers})
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
const defaultProps = {
  instagram: {minFollowers: 0, maxFollowers: 50000},
  twitter: {minFollowers: 0, maxFollowers: 50000}
}
export function getInfluencers(params = defaultProps) {
  return function(dispatch) {
    dispatch(getInfluencersLoading())

    return fetchInfluencers(params)
      .then(response => dispatch(success(response)))
      .then(error => dispatch(fail(error)))
  }
}

export default { getInfluencers }