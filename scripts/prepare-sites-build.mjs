import { access, copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const hostedConfig = join('dist', '.openai', 'hosting.json');
const localConfig = join('.openai', 'hosting.json');

try {
  await access(localConfig);
  await mkdir(dirname(hostedConfig), { recursive: true });
  await copyFile(localConfig, hostedConfig);
} catch {
  // Non-Sites builds do not need hosting metadata.
}
