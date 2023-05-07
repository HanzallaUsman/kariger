import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseCredentials = {
  apiKey: "AIzaSyCk-B24nchwnOdfKLQHj8ll_lrdplhfBn0",
  authDomain: "kariger-82dd4.firebaseapp.com",
  projectId: "kariger-82dd4",
  storageBucket: "kariger-82dd4.appspot.com",
  messagingSenderId: "1046156662515",
  appId: "1:1046156662515:web:7a7f05be1431636d2f8986",
};

export const app = initializeApp(firebaseCredentials);

export const storage = getStorage(app);
