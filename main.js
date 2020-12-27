const { app, BrowserWindow ,Menu} = require('electron')
let template=[{label:'item 1'},{label:'item 2'},{role:'quit',label:'Close'},{role:'minimize'}]
let contextMenu=Menu.buildFromTemplate(template)
function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 600
    })
    win.loadFile('index.html')
    win.webContents.on('context-menu',()=>{
        contextMenu.popup();
    })
}

app.whenReady().then(createWindow)