import { readContacts } from '../utils/readContacts.js';
export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return `${contacts.length} adet veri var.`;
  } catch (e) {
    console.error('hata:', e);
  }
};

console.log(await countContacts());
