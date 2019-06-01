import React from 'react'
import { connect} from 'react-redux'
import {actions} from '../../modules/influencers'
import {useSocialMediaFilter} from '../../hooks/useSocialMediaFilter'
import {SocialFilters} from '../../components/SocialFilters'
import {Filters} from '../../components/Filters'
import {Button} from '../../components/Button'
import {Label} from '../../components/Label'
import {FollowerFilter} from '../../components/FollowerFilter'

function Container({getInfluencers}) {
  const [minFollowersInstagram, maxFollowersInstagram] = useSocialMediaFilter(0, 50000)
  const [minFollowersTwitter, maxFollowersTwitter] = useSocialMediaFilter(0, 50000)

  const submit = e => {
    e.preventDefault();
    getInfluencers({
      instagram: {
        minFollowers: minFollowersInstagram,
        maxFollowers: maxFollowersInstagram,
      },
      twitter: {
        minFollowers: minFollowersTwitter,
        maxFollowers: maxFollowersTwitter,
      }
    })
  }

  return(
    <Filters>
      <SocialFilters name='Instagram'>
        <FollowerFilter
          label='Min. Followers'
          value={minFollowersInstagram.value}
          onChange={e => minFollowersInstagram.set(e.target.value)}/>
        <FollowerFilter
          label='Max. Followers'
          value={maxFollowersInstagram.value}
          onChange={e => maxFollowersInstagram.set(e.target.value)}/>
      </SocialFilters>
      <SocialFilters name='Twitter'>
        <FollowerFilter
          label='Min. Followers'
          value={minFollowersTwitter.value}
          onChange={e => minFollowersTwitter.set(e.target.value)}/>
        <FollowerFilter
          label='Max. Followers'
          value={maxFollowersTwitter.value}
          onChange={e => maxFollowersTwitter.set(e.target.value)}/>
      </SocialFilters>

      <Button onclick={submit}>Filter</Button>
    </Filters>
  )
}
const mapStateToProps = state => ({ influencers: state.influencers.results})
const mapDispatchToProps = dispatch => ({
  getInfluencers: params => dispatch(actions.getInfluencers(params))
})
export default connect(mapStateToProps, mapDispatchToProps)(Container)