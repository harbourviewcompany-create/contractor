import { mkdirSync, copyFileSync } from 'node:fs';

mkdirSync('dist', { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js']) {
  copyFileSync(file, `dist/${file}`);
}
