import React from 'react'
import { connect} from 'react-redux'
import {actions} from '../modules/influencers'

class App extends React.Component {
  componentDidMount() {
    this.props.getInfluencers()
  }

  render() {
    const {influencers} = this.props

    if (influencers.length === 0) return <div>working buddy! :)</div>

    return (
      <div>
        {influencers.map(influencer => (
          <div key={influencer.id}>
            <h1>{`${influencer.name} ${influencer.lastName}`}</h1>
            <p>{influencer.location}</p>

            <ul>
              {influencer.socials.map(social=> (
                <li key={social.name}>
                  <span>{social.name}</span>, <span>{social.userName} {social.followers}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  }
}
App.defaultProps = {
  influencers: []
}

const mapStateToProps = state => {
  return {
    influencers: state.influencers.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInfluencers: () => dispatch(actions.getInfluencers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)