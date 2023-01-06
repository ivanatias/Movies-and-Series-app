import React from 'react'
import MoviesGrid from '../components/Movies/MoviesGrid'
import { useDebounce } from '../hooks/useDebounce'
import { useSearchParams } from 'react-router-dom'

const MoviesPage = () => {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')

  const debouncedSearch = useDebounce(search, 500)

  return <MoviesGrid search={debouncedSearch} />
}

export default MoviesPage
