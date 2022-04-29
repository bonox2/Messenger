import { setDoc, doc, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

export function useDB() {
  async function setDocument(collectionName, data, id) {
    try {
      let ref = null;
      if (id) {
        ref = await setDoc(doc(db, collectionName, id), data);
      } else {
        ref = await addDoc(collection(db, collectionName), data);
      }
      console.log('setDocument success >>>', ref);
      return Promise.resolve(ref);
    } catch (error) {
      console.warn('setDocument error >>>', error);
      return Promise.reject(error);
    }
  }

  return { setDocument };
}
