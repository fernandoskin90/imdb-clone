import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './shared/presentation/components'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
