const { app, BrowserWindow,Menu } = require('electron')

let isMac=process.platform=="darwin";
let template=[
   ...isMac? {label:'Blog',submenu:[
        {label:'About'},
        {label:'Help'}
    ]}:[],
    {label:'File'},
    {label:'Operation',submenu:[
       isMac? {role:'close',label:'Quit'}: {role:'quit',label:'Quit'},
        {label:'Zoom'}
    ]}, 

]
let menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 600
    })
    win.loadFile('index.html')
}

app.whenReady().then(createWindow)