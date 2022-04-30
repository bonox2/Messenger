import { setDoc, doc, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { getDoc } from "firebase/firestore";


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
  async function getDocument(collectionName, data, id) {
    const docRef = doc(db, "cities", "SF");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
}