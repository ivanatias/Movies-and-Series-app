import React from 'react'
import TVGrid from '../components/TV/TVGrid'
import { useDebounce } from '../hooks/useDebounce'
import { useSearchParams } from 'react-router-dom'

const SeriesPage = () => {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')

  const debouncedSearch = useDebounce(search, 500)

  return <TVGrid search={debouncedSearch} />
}

export default SeriesPage
