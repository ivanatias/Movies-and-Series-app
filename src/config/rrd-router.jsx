import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { queryClient } from './react-query-config'
import Layout from '../components/Layout/Layout'
import LandingPage, { loader as trendingsLoader } from '../pages/LandingPage'
import MoviesPage, { loader as moviesLoader } from '../pages/MoviesPage'
import SeriesPage, { loader as tvLoader } from '../pages/SeriesPage'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ScrollToTop />,
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
