import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import LandingPage from '../Pages/LandingPage'
import MoviesPage from '../Pages/MoviesPage'
import SeriesPage from '../Pages/SeriesPage'
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
