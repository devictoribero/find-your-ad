import React from 'react'
import { connect} from 'react-redux'
import {actions} from '../../modules/influencers'
import {useSocialMediaFilter} from '../../hooks/useSocialMediaFilter'
import SocialFilters from '../../components/SocialFilters'

function Filters({getInfluencers}) {
  const [minFollowersInstagram, maxFollowersInstagram] = useSocialMediaFilter()
  const [minFollowersTwitter, maxFollowersTwitter] = useSocialMediaFilter(0, 400)
  
  const submit = e => {
    e.preventDefault()
    console.log('asdasd')

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
    <form>
      <h2 style={{margin: 0}}>Filters</h2>
      <SocialFilters.Layout>
        <SocialFilters.Name>Instagram</SocialFilters.Name>
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
      </SocialFilters.Layout>

      <SocialFilters.Layout>
        <SocialFilters.Name>Twitter</SocialFilters.Name>
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
      </SocialFilters.Layout>

      <button onClick={submit} style={{margin: '1rem 0 0 0'}}>Filter</button>
    </form>
  )
}
const mapStateToProps = state => ({ influencers: state.influencers.results})
const mapDispatchToProps = dispatch => ({
  getInfluencers: () => dispatch(actions.getInfluencers())
})
export default connect(mapStateToProps, mapDispatchToProps)(Filters)