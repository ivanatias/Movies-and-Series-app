import React from 'react'
import MoviesGrid from '../components/Movies/MoviesGrid'
import { useSearchParams } from 'react-router-dom'

const MoviesPage = () => {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')

  return <MoviesGrid search={search} />
}

export default MoviesPage
