import * as path from "path"

import { BrowserWindow, app } from "electron"

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
          contextIsolation:false
        }

    })

    mainWindow.loadFile('views/index.html')
}
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function() {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})
