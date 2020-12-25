const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 600
    })
    win.loadFile('index.html')
}
// setTimeout(() => {
//     console.warn(app.isReady())
// }, 1000);
// app.whenReady().then(createWindow)
// app.on("before-quit",(e)=>{
//     console.warn("called before app quit")
//     e.preventDefault();
// })
// app.on("will-quit",(e)=>{
//     console.warn("called will app quit")
//     e.preventDefault();
// })

app.on('browser-window-focus',()=>{
    console.warn("you are currently using this app");
})
app.on('browser-window-blur',()=>{
    console.warn("you are  not using this app");
})
app.on('ready',()=>{
   
    createWindow();
})
