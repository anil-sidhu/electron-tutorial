const { app, BrowserWindow,dialog,globalShortcut} = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 600
    })
    win.loadFile('index.html')
    globalShortcut.register("Shift+K",()=>{
        dialog.showOpenDialog({
            defaultPath:app.getPath("desktop"),
            buttonLabel:'select any file'
        }).then((result)=>{
            console.warn("result",result)
        }); 
    })
   
} 

app.whenReady().then(createWindow)