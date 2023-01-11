import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { queryClient } from './react-query-config'
import Layout from '../components/Layout/Layout'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import LandingPage, { loader as trendingsLoader } from '../views/LandingPage'
import MoviesPage, { loader as moviesLoader } from '../views/MoviesPage'
import SeriesPage, { loader as tvLoader } from '../views/SeriesPage'
import ErrorPage from '../views/ErrorPage'

const router = createBrowserRouter([
  {
    element: <ScrollToTop />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <LandingPage />,
            loader: trendingsLoader(queryClient)
          },
          {
            path: 'movies',
            element: <MoviesPage />,
            loader: moviesLoader(queryClient)
          },

          {
            path: 'tvseries',
            element: <SeriesPage />,
            loader: tvLoader(queryClient)
          }
        ]
      }
    ]
  }
])

export { router }
