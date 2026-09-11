# Rennlinie

3D-Rennspiel im Browser (WebGL über Three.js, geladen vom cdnjs-CDN) in einer einzigen HTML-Datei.
14 Strecken als echte 3D-Rundkurse mit Höhenprofil (12 nach europäischen Rennstrecken, Nordschleife,
zwei fiktive Kurse), 8 Wagen mit spiegelndem Lack, Echtzeit-Schatten, Wald, Berge, Tribünen und Stadt,
Rennen gegen 8 Gegner oder Zeitfahren mit Geist-Runde, Minimap.
Tastatur, Touch und Gamepad (Xbox, PlayStation, Standard-Mapping, mit Vibration).

Das Fahrzeugmodell (`car.glb`, 40.000 Dreiecke, WebP-Texturen, meshopt-komprimiert) wurde per
Text-zu-3D (Hunyuan 3D v3.1 über Higgsfield) erzeugt und mit gltf-transform verkleinert. Es steckt als
Data-URI in `index.html`; die weißen Lackflächen werden im Shader pro Wagen eingefärbt. Fehlt das Modell
oder lädt es nicht, fällt das Spiel auf die prozedurale Karosserie zurück.

Die Strecken sind als Wegpunkte in Metern definiert (`wp` in `index.html`); eine geschlossene
Catmull-Rom-Kurve dazwischen liefert Fahrbahn, Curbs, Gelände und die Kurvenkräfte der Fahrphysik.

## Spielen

Im Browser: `index.html` öffnen. Alles Weitere steht im Startmenü.

## Als App auf Android-Handy oder -Tablet (ohne APK)

Die Seite ist eine installierbare Web-App (PWA). Wird sie über `https://` aufgerufen
(zum Beispiel über GitHub Pages oder einen anderen Webserver), erscheint im Startmenü
der Knopf **Als App installieren**. Alternativ in Chrome: Menü → *Zum Startbildschirm
hinzufügen*. Die App läuft danach im Vollbild, im Querformat und auch offline.

## Echte Android-APK (Capacitor)

Voraussetzungen: Node.js, Java 17 oder neuer, Android SDK (Android Studio oder
Command-line Tools, `ANDROID_HOME` gesetzt).

```sh
cd android-app
npm install
npm run apk
```

Ergebnis: `android-app/android/app/build/outputs/apk/debug/app-debug.apk`.
Das ist eine Debug-APK zum direkten Installieren (in den Android-Einstellungen
„Unbekannte Quellen“ für den Browser oder Dateimanager erlauben).
Für den Play Store: `android-app/android` in Android Studio öffnen und
*Build → Generate Signed Bundle / APK* nutzen.

## Windows-Programm, klein (Neutralino, empfohlen)

Nutzt die WebView2-Engine, die in Windows 10/11 enthalten ist. Das Programm ist unter 3 MB groß.

```sh
npm install -g @neutralinojs/neu
cd windows
./build.sh
```

Ergebnis: `windows/dist/Rennlinie/Rennlinie-win_x64.exe` plus `resources.neu` (beide Dateien
zusammen kopieren). Derselbe Build erzeugt auch Linux- und macOS-Binaries. F11 schaltet Vollbild um.

## Windows-Programm, groß (Electron, eigene Browser-Engine)

Für Rechner ohne WebView2. Rund 370 MB entpackt.

```sh
cd desktop
npm install
npm run build:win
```

Ergebnis: `desktop/dist/Rennlinie-win32-x64/Rennlinie.exe` (Ordner komplett kopieren).
`npm run build:linux` und `npm run build:mac` bauen die anderen Plattformen.

## Dateien

| Datei | Zweck |
|-------|-------|
| `index.html` | das komplette Spiel (inklusive eingebettetem Fahrzeugmodell) |
| `car.glb` | generiertes Fahrzeugmodell, Quelle für die Einbettung |
| `manifest.webmanifest`, `sw.js`, `icon-*.png` | Web-App-Installation und Offline-Betrieb |
| `wrap-www.cjs` | packt `index.html` in ein vollständiges HTML-Dokument für die Apps |
| `windows/` | Neutralino-Projekt, kleines Windows-Programm |
| `desktop/` | Electron-Projekt für Windows, Linux, macOS |
| `android-app/` | Capacitor-Projekt für die Android-APK |
