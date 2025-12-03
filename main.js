const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'pulsar.png'),
    autoHideMenuBar: true,
    menuBarVisible: false
  });

  win.loadFile('samaga.html');
}

app.whenReady().then(createWindow);
