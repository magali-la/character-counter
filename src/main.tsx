import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// fonts
import '@fontsource/iosevka-etoile/300.css';
import '@fontsource/iosevka-etoile/400.css';
import '@fontsource/iosevka-etoile/500.css';
import '@fontsource/iosevka-etoile/600.css';
import '@fontsource/iosevka-etoile/700.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
