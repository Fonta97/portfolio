// check-routes.js (non richiede zx)
import { readdirSync, readFileSync, statSync } from 'fs';
import { join, extname } from 'path';

function walk(dir) {
  let files = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const stat = statSync(full);
    if (stat.isDirectory()) files = files.concat(walk(full));
    else if (/\.(jsx?|tsx?)$/.test(name)) files.push(full);
  }
  return files;
}

const offenders = [];
for (const file of walk('app/routes')) {
  const txt = readFileSync(file, 'utf8');
  if (/export\s*\{[^}]*\baction\b[^}]*\}\s*from/.test(txt)) {
    offenders.push(file);
  }
  if (/export\s*\{[^}]*\bloader\b[^}]*\}\s*from/.test(txt)) {
    offenders.push(file);
  }
}

if (offenders.length) {
  console.error('\n🚫  Wrapper che esportano action/loader mancanti:');
  offenders.forEach(f => console.error(' -', f));
  process.exit(1);
} else {
  console.log('✅  Nessun export mancante nelle route wrapper');
}
