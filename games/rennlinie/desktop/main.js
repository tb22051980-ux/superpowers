// Rennlinie als Desktop-Programm (Electron). Lädt das Spiel aus ../index.html.
const { app, BrowserWindow, Menu, globalShortcut } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280, height: 720, minWidth: 640, minHeight: 400,
    backgroundColor: '#0F1317',
    title: 'Rennlinie',
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true }
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, 'www', 'index.html'));
  win.once('ready-to-show', () => win.show());
  globalShortcut.register('F11', () => win.setFullScreen(!win.isFullScreen()));
  globalShortcut.register('Alt+Enter', () => win.setFullScreen(!win.isFullScreen()));
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('will-quit', () => globalShortcut.unregisterAll());
app.on('window-all-closed', () => app.quit());
