import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ExchangeProvider } from './context/ExchangeProvider.tsx'

import './index.css'
import routes from './routes/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExchangeProvider>
      <RouterProvider router={routes} />
    </ExchangeProvider>
  </StrictMode>,
)
