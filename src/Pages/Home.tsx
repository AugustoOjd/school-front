import React from 'react'
import Form from '../components/register/BaseRegister'
import Intro from '../components/intro/BaseIntro'
import Layout from '../components/layout/Layout'
import Rank from '../components/rank/BaseRank'

const Home = () => {
  return (
    <>
    <Layout>
          
        <Rank/>
        <Intro/>
        <Form/>
        
    </Layout>
    </>
  )
}

export default Home