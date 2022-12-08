import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/components/app/app';
import '@/styles/style.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);