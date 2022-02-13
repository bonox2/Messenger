import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA71rqEZNLes03Sz0ZQ35sG6UOwPN7Nz6o",
  authDomain: "messenger-8d81f.firebaseapp.com",
  projectId: "messenger-8d81f",
  storageBucket: "messenger-8d81f.appspot.com",
  messagingSenderId: "933412610252",
  appId: "1:933412610252:web:8ec20c762ab524c879e269"
};

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth();
export default firebase;