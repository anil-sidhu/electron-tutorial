const { app, BrowserWindow,globalShortcut } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 600
    })
    win.loadFile('index.html')
   
}

app.whenReady().then(()=>{
    createWindow()
    globalShortcut.register("Shift+K",()=>{
        console.warn("k + shift is pressed")
    })
})