// const { readdir } = require('fs').promises;
// import { readdir, stat } from 'fs/promises';
// import * as os from 'os';
// import * as path from 'path';
const path = require('path');
const os = require('os');
const { readdir, stat } = require('fs').promises;

module.exports = {
    read: async function(folder) {
        const folderPath = folder || os.homedir();
        let dirs = await readdir(folderPath);
        dirs =  await Promise.all(dirs.map(async (dir) => {
            const info = await stat(path.join('/', folderPath, dir));
            // console.log(info.blocks ? 'File' : 'Folder');
            return ({
                name: dir,
                type: info.blocks ? 'File' : 'Folder',
                size: info.size
            });
        }))
        return dirs;
    }
}

// export default FolderService;