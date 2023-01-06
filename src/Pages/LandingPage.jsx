import React from 'react'
import Banner from '../components/Banner/Banner'
import TrendingGrid from '../components/Trendings/TrendingGrid'
import DailyTrendings from '../components/Trendings/DailyTrendings'

const LandingPage = () => {
  return (
    <>
      <Banner />
      <TrendingGrid />
      <DailyTrendings />
    </>
  )
}

export default LandingPage
