import React from 'react'
import Banner from '../components/Banner/Banner'
import TrendingGrid from '../components/Trendings/TrendingGrid'
import DailyTrendings from '../components/Trendings/DailyTrendings'
import { useLoaderData } from 'react-router-dom'
import { getData } from '../utils/getData'

const dailyTrendingsQuery = () => ({
  queryKey: ['trendingsdaily'],
  queryFn: () => getData('/trending/all/day')
})

const weeklyTrendingsQuery = () => ({
  queryKey: ['trendingsweek'],
  queryFn: () => getData('/trending/all/week')
})

export const loader = queryClient => async () => {
  const dailyQuery = dailyTrendingsQuery()
  const weeklyQuery = weeklyTrendingsQuery()

  const initialDaily =
    queryClient.getQueryData(dailyQuery.queryKey) ??
    (await queryClient.fetchQuery(dailyQuery))

  const initialWeekly =
    queryClient.getQueryData(weeklyQuery.queryKey) ??
    (await queryClient.fetchQuery(weeklyQuery))

  return {
    initialDaily,
    initialWeekly
  }
}

const LandingPage = () => {
  const { initialDaily, initialWeekly } = useLoaderData()
  return (
    <>
      <Banner />
      <TrendingGrid initialData={initialWeekly} />
      <DailyTrendings initialData={initialDaily} />
    </>
  )
}

export default LandingPage
