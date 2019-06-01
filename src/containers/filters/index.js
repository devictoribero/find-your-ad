import React from 'react'
import { connect} from 'react-redux'
import {actions} from '../../modules/influencers'
import {useSocialMediaFilter} from '../../hooks/useSocialMediaFilter'
import {SocialFilters} from '../../components/SocialFilters'
import {Filters} from '../../components/Filters'
import {Button} from '../../components/Button'

function Container({getInfluencers}) {
  const [minFollowersInstagram, maxFollowersInstagram] = useSocialMediaFilter(0, 50000)
  const [minFollowersTwitter, maxFollowersTwitter] = useSocialMediaFilter(0, 50000)


  return(
    <Filters>
      asdasd
    </Filters>
  )
}
const mapStateToProps = state => ({ influencers: state.influencers.results})
const mapDispatchToProps = dispatch => ({
  getInfluencers: params => dispatch(actions.getInfluencers(params))
})
export default connect(mapStateToProps, mapDispatchToProps)(Container)