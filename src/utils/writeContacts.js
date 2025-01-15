import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";

export const writeContacts = async (updatedContacts) => {
    const data = updatedContacts;
    try{
        await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf-8');
        console.log('Islem Basarili');
    }catch(e){
        console.error(e);
    }
};
