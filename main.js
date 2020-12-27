const { app, BrowserWindow,Tray,Menu } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 600
    })
    win.loadFile('index.html')
    tray = new Tray('orbit.png')
    tray.setToolTip('Tray for electron js')
    // tray.on("click",()=>{
    //     win.isVisible()?win.hide():win.show()
    // })
    let template =[{label:'item 1'},{label:'item 2',type:"radio"}]
    let contextMenu=Menu.buildFromTemplate(template)
    tray.setContextMenu(contextMenu)
    
}

app.whenReady().then(createWindow)