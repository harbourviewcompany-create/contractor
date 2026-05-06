import { mkdirSync, copyFileSync, writeFileSync } from 'node:fs';

mkdirSync('dist', { recursive: true });
copyFileSync('index.html', 'dist/index.html');
copyFileSync('thank-you.html', 'dist/thank-you.html');
writeFileSync('dist/_redirects', '/thank-you /thank-you.html 200\n/* /index.html 200\n');
