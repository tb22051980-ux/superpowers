#!/bin/sh
# Kopiert die Spieldateien nach android-app/www, von dort packt Capacitor sie in die App.
cd "$(dirname "$0")" && node ../wrap-www.cjs www
