// import { promises as fs } from 'fs';
// import { platform } from 'os';
// import { spawn } from 'child_process';

const {spawn} = require('child_process');

module.exports = {
    read: async function(filePath) {

    },
    open: async function(filePath) {
        const openFile = spawn('open', [filePath]);
        openFile.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });
        
        openFile.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });
        
        openFile.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
    }
}