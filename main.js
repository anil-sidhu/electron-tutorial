const { app, BrowserWindow,screen } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 600
    })
    win.loadFile('index.html')
    
    // console.warn("screen",process)
}

app.whenReady().then(createWindow)