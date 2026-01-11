const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 442,
        height: 468
    })

    win.loadFile('index.html');
    win.setAlwaysOnTop(true);
}

app.whenReadyt().then(createWindow)