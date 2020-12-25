const { app, BrowserWindow } = require('electron')
const windowStateKeeper= require('electron-window-state')
let win;
function createWindow() {
    const mainWindowState= windowStateKeeper({
        defaultHeight:900,
        width:600
    })  
     win = new BrowserWindow({ 
         x:mainWindowState.x,
         y:mainWindowState.y,
        width: mainWindowState.width,
        height: mainWindowState.height
    })
    win.loadFile('index.html')
    mainWindowState.manage(win)
}
 
app.whenReady().then(createWindow) 