import React from 'react'
import Banner from '../components/Banner/Banner'
import WeeklyTrendings from '../components/Trendings/WeeklyTrendings'
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

  const promises = [
    queryClient.ensureQueryData(dailyQuery),
    queryClient.ensureQueryData(weeklyQuery)
  ]

  const [initialDaily, initialWeekly] = await Promise.all(promises)

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
      <WeeklyTrendings initialData={initialWeekly} />
      <DailyTrendings initialData={initialDaily} />
    </>
  )
}

export default LandingPage
