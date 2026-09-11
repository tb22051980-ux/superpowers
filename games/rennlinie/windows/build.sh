#!/bin/sh
# Baut Rennlinie als kleines Windows-Programm (Neutralino, nutzt die WebView2-Engine von Windows).
# Voraussetzung: npm install -g @neutralinojs/neu
set -e
cd "$(dirname "$0")"
node ../wrap-www.cjs www
[ -d bin ] || neu update
neu build --release
echo "Fertig: dist/Rennlinie/Rennlinie-win_x64.exe + resources.neu"
