const {app, BrowserWindow, ipcMain} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  const {width, height} = require('electron').screen.getPrimaryDisplay().workAreaSize

  win = new BrowserWindow({
    width,
    height,
    backgroundColor: '#000',
    alwaysOnTop: true,
    fullscreen: true,
    minimizable: false,
    resizable: false,
    movable: false,
    // closable: false,
  })

  // and load the index.html of the app.
  win.loadFile('index.html');
  win.setVisibleOnAllWorkspaces(true);

  // Open the DevTools.
  // win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
})

// ipcMain.on('client-quit', () => {
//   app.quit();
// })
