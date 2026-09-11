#!/bin/sh
# Kopiert die Spieldateien nach desktop/www (vollständiges HTML-Dokument).
cd "$(dirname "$0")" && node ../wrap-www.cjs www
