const { app, BrowserWindow, Menu } = require('electron');

const url = require('url');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  Menu.setApplicationMenu(null);  
  // The Main Window
  mainWindow = new BrowserWindow({width: 720, height: 600});

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }))

});
