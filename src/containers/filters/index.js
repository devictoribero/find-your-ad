import React from 'react'
import { connect} from 'react-redux'
import {actions} from '../../modules/influencers'
import {useSocialMediaFilter} from '../../hooks/useSocialMediaFilter'
import {SocialFilters} from '../../components/SocialFilters'

function Filters({getInfluencers}) {
  const [minFollowersInstagram, maxFollowersInstagram] = useSocialMediaFilter()
  const [minFollowersTwitter, maxFollowersTwitter] = useSocialMediaFilter(0, 400)
  
  const submit = () => {
    getInfluencers({
      instagram: {
        minFollowers: minFollowersInstagram.value,
        maxFollowers: maxFollowersInstagram.value,
      },
      twitter: {
        minFollowers: minFollowersTwitter.value,
        maxFollowers: maxFollowersTwitter.value,
      }
    })
  }

  return(
    <div>
      <h2>Filters</h2>
      <SocialFilters>
        <React.Fragment>
          <legend>Instagram</legend>
          <label><input type="checkbox"/> Active</label>
          <br/>
          <label>
            Min. Followers:
            <input
              type="number"
              value={minFollowersInstagram.value}
              onChange={e => minFollowersInstagram.set(e.target.value)}/>
          </label>
          <br/>
          <label>
            Max. Followers:
            <input
              type="number"
              value={maxFollowersInstagram.value}
              onChange={e => maxFollowersInstagram.set(e.target.value)}/>
          </label>
        </React.Fragment>
      </SocialFilters>

      <SocialFilters>
        <React.Fragment>
          <legend>Twitter</legend>
          <label><input type="checkbox"/> Active</label>
          <br/>
          <label>
            Min. Followers:
            <input
              type="number"
              value={minFollowersTwitter.value}
              onChange={e => minFollowersTwitter.set(e.target.value)}/>
          </label>
          <br/>
          <label>
            Max. Followers:
            <input
              type="number"
              value={maxFollowersTwitter.value}
              onChange={e => maxFollowersTwitter.set(e.target.value)}/>
          </label>
        </React.Fragment>
      </SocialFilters>

      <button onClick={submit}>load again</button>
    </div>
  )
}
const mapStateToProps = state => ({ influencers: state.influencers.results})
const mapDispatchToProps = dispatch => ({
  getInfluencers: () => dispatch(actions.getInfluencers())
})
export default connect(mapStateToProps, mapDispatchToProps)(Filters)