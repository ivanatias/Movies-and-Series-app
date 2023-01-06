import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import LandingPage from '../pages/LandingPage'
import MoviesPage from '../pages/MoviesPage'
import SeriesPage from '../pages/SeriesPage'
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
            element: <LandingPage />
          },
          {
            path: 'movies',
            element: <MoviesPage />
          },

          {
            path: 'tvseries',
            element: <SeriesPage />
          }
        ]
      }
    ]
  }
])

export { router }
