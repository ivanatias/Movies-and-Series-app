import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './config/react-query-config'
import './index.css'
import App from './App'
import './bootstrap.min.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
