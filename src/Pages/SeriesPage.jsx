import React from 'react'
import Layout from '../components/Layout/Layout'
import TVGrid from '../components/TV/TVGrid'
import { useRouteQuery } from '../hooks/useRouteQuery'
import { useDebounce } from '../hooks/useDebounce'

const SeriesPage = () => {
  const query = useRouteQuery()
  const search = query.get('search')

  const debouncedSearch = useDebounce(search, 500)

  return (
    <Layout>
      <TVGrid key={debouncedSearch} search={debouncedSearch} />
    </Layout>
  )
}

export default SeriesPage
