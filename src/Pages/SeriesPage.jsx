import React from 'react'
import TVGrid from '../components/TV/TVGrid'
import { useSearchParams } from 'react-router-dom'

const SeriesPage = () => {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')

  return <TVGrid search={search} />
}

export default SeriesPage
