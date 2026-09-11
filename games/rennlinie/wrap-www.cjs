// Verpackt index.html (im Repo ohne <html>/<head>-Rahmen, weil die Artefakt-Seite ihn selbst liefert)
// in ein vollständiges HTML-Dokument für Electron, Neutralino und Capacitor.
// Aufruf: node wrap-www.js <zielordner>
const fs = require('fs'), path = require('path');
const out = process.argv[2]; if (!out) { console.error('Zielordner fehlt'); process.exit(1); }
fs.mkdirSync(out, { recursive: true });
const src = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const doc = '<!doctype html>\n<html lang="de">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n<style>[hidden]{display:none!important}img{max-width:100%}</style>\n</head>\n<body>\n' + src + '\n</body>\n</html>\n';
fs.writeFileSync(path.join(out, 'index.html'), doc);
for (const f of ["car.glb", 'manifest.webmanifest', 'sw.js', 'icon-192.png', 'icon-512.png', 'icon-512-maskable.png']) fs.copyFileSync(path.join(__dirname, f), path.join(out, f));
console.log('www geschrieben nach ' + out);
