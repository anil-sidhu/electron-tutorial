const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 600
    })
    win.loadFile('index.html')
    let wc=win.webContents;
    wc.on("dom-ready",()=>{
        console.warn("app is ready now")
    })
    wc.on("did-finish-load",()=>{
        console.warn("app loading is finished")
    })
    wc.on("new-window",()=>{
        console.warn("new window is open")
    })
    wc.on("before-input-event",(x)=>{
        console.warn("some input event is called ")
    })
}

app.whenReady().then(createWindow)