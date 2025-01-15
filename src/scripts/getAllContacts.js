import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    await readContacts();
    console.log('Veriler Cekilldi');
  } catch (e) {
    console.error('hata', e);
  }
};

console.log(await getAllContacts());
