import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import { AudioProvider } from './contexts/AudioContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AudioProvider>
      <RouterProvider router={router} />
    </AudioProvider>
  </StrictMode>,
)
