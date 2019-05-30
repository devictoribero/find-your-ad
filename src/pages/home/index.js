import React from 'react'
import Influencers from '../../containers/influencers'
import Filters from '../../containers/filters'
import {Layout} from '../../components/Layout'

function Home(props) {
  return (
    <Layout>
      <Filters />
      <Influencers />
    </Layout>
  )
}
export default Home
