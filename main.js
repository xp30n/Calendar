const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 270,
        height: 330
    })

    win.loadFile('index.html');
    win.setAlwaysOnTop(true);
}

app.whenReady().then(createWindow)