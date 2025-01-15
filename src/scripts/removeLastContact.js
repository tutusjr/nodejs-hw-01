import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.pop();
      await writeContacts(contacts);
      console.log('Son veri silindi');
    } else {
      console.log('Silinecek veri yok');
    }
  } catch (e) {
    console.error('hata: ', e);
  }
};

removeLastContact();
