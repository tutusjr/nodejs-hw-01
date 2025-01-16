import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    console.log('Veriler Cekilldi');
    return await readContacts();
  } catch (e) {
    console.error('hata', e);
  }
};

console.log(await getAllContacts());
