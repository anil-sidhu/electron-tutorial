const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 600,
        frame:false
    })
    win.loadFile('index.html')
}
app.on('ready',()=>{
   
    createWindow();
})
 