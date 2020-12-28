const { app, BrowserWindow,screen,Tray } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('index.html');
    tray=new Tray("tray2.png");
    tray.on("click",()=>{
        // win.isVisible()?win.hide():win.show()
    win.frame=false

    })
     
    
}

app.whenReady().then(createWindow)