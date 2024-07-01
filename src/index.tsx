import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './common.css';
import { App } from '@/components/app';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);

root.render(<App />);
