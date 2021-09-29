import FolderService from './services/folder.service.js';
import {platform} from 'os';
import FileService from './services/file.service.js';

console.log(platform());

FileService.open('/Users/sumugan/tika-app-1.17.jar')

// FolderService.read().then((data) => {
//     console.log(data);
// })

// FolderService.getInfo().then(data => console.log(data));
