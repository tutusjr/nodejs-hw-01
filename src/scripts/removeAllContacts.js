import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    let contacts = await readContacts();
    contacts = [];
    await writeContacts(contacts);
    console.log('Veriler Silindi');
  } catch (e) {
    console.error('hata:', e);
  }
};

removeAllContacts();
