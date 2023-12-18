import React from 'react'
import Myowl from './Myowl'
import Searchjobs from './Searchjobs'
import Catougary from './Catougary'
import Helppage from './Helppage'
import Jobs from './Jobs'
import Rewies from './Rewies'
// import Maincarousal from './Maincarousal'

const Home = () => {
  return (
    <>
      <section>
        <Myowl></Myowl>
        <Searchjobs></Searchjobs>
        <Catougary></Catougary>
        <Helppage></Helppage>
        <Jobs></Jobs>
        <Rewies></Rewies>
      </section>
    </>
  )
}

export default Home
