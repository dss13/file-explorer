// const { ipcRenderer } = require('electron');
// const electron = require('electron')
// console.log(electron)
// const remote = electron.remote;
// // Import the ipcRenderer Module from Electron 
const ipc = window.api.ipc;

function getFolderContent(path) {
    ipc.send('get-folder-content', path);
}


ipc.on('update-folder-content', function(arg) {
    console.log(arg);
      
    // Updating the value of the HTML Tag with the Data Received
    // In Case the Data Received is not a Number and is 
    // some arbitary Value,display will show as NaN (Not a Number)
    updateFolderContent(arg);
});

function updateFolderContent(data) {
    document.getElementById('folders').innerHTML = '';
    data.forEach(folder => {
        document.getElementById('folders').innerHTML += `
            <h2>${folder.name} </h2>
            <h3>Type: ${folder.type}, Size: ${folder.size}</h3>
        `
    });
}
