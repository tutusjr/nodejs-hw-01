import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const readContacts = async () => {
    try{
        const data = await fs.readFile(PATH_DB);
        return JSON.parse(data);
    }catch(e){
        console.error(e);
        return [];
    }
};

