import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    for (let i = 0; i < number; i++) {
      const newContacts = createFakeContact();
      contacts.push(newContacts);
    }
    await writeContacts(contacts);
    console.log(`${number} adet veri eklendi`);

  } catch (e) {
    console.error(e);
  }
};

generateContacts(5);
