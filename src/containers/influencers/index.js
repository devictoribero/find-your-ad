import React from 'react'
import { connect} from 'react-redux'
import {actions} from '../../modules/influencers'
import Grid from '../../components/Grid'
import InfluencerCard from '../../components/InfluencerCard'

function Container({influencers = [], getInfluencers}) {
  React.useEffect(() => {
    getInfluencers({
      instagram: {minFollowers: 0, maxFollowers: 500000},
      twitter: {minFollowers: 0, maxFollowers: 1000000}
    })
  }, [getInfluencers])

  if (influencers.length === 0) return <div>working buddy! :)</div>

  console.log(influencers.length)

  return (
    <Grid>
      {influencers.map(influencer => (
        <InfluencerCard key={influencer.id} {...influencer}/>
      ))}
    </Grid>
    )
}

const mapStateToProps = state => ({ influencers: state.influencers.results})
const mapDispatchToProps = dispatch => ({
  getInfluencers: params => dispatch(actions.getInfluencers(params))
})
export default connect(mapStateToProps, mapDispatchToProps)(Container)