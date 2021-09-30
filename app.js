// import FolderService from './services/folder.service.js';
// import {platform} from 'os';
// import FileService from './services/file.service.js';
// import {app, BrowserWindow} from 'electron';
const {platform} = require('os');
const {app, BrowserWindow} = require('electron');
const path = require('path');

console.log(platform());

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join('/', __dirname, 'ui', 'preload.js')
        }
    })

    win.loadFile(path.join('/', __dirname, 'ui', 'index.html'))
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

// FileService.open('/Users/sumugan/tika-app-1.17.jar')

// FolderService.read().then((data) => {
//     console.log(data);
// })

// FolderService.getInfo().then(data => console.log(data));
