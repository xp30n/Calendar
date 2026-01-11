const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 370,
        height: 470,
        resizable: false,
        mazimizable: false,
        fullscreenable: false,
        frame: false,
        transparent: false,
        backgroundColor: '#00000000',
        webPreferences: {
            contextIsolation: true
        }
    })

    win.loadFile('index.html');
    win.setAlwaysOnTop(true);
}

app.whenReady().then(createWindow)