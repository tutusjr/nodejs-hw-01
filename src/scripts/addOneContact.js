import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

export const addOneContact = async () => {
    try{
        const contacts = await readContacts();
        const newContact = createFakeContact();
        contacts.push(newContact);
        await writeContacts(contacts);
        console.log("1 adet veri eklendi");
    }catch(e){
        console.error(e);
    }
};

addOneContact();
