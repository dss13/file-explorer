window.addEventListener('DOMContentLoaded', () => {
    const path = require('path');
    const folderService = require(path.join('/', __dirname,'../services/folder.service.js'));

    folderService.read().then((data) => {
        data.forEach(folder => {
            const folderDiv = document.getElementById('folders');
            // console.log(folderDiv)
            console.log(folder);
            folderDiv.innerHTML += `
                <button onclick="getFolderContent('${folder.path}')">${folder.name} </button>
                <h3>Type: ${folder.type}, Size: ${folder.size}</h3>
            `
        });
    })

    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
})

const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('api', {
  ipc: {
    send: (topic, args) => ipcRenderer.send(topic, args),
    on: (topic, cb) => {
      ipcRenderer.on(topic, (event, arg) => cb(arg));
    }
  }  
})