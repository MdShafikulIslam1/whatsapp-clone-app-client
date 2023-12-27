import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxQv0eKQbkYBPJiFPI4bUqlmjqXv2FL-s",
  authDomain: "whatsapp-clone-app-ebaef.firebaseapp.com",
  projectId: "whatsapp-clone-app-ebaef",
  storageBucket: "whatsapp-clone-app-ebaef.appspot.com",
  messagingSenderId: "29592622407",
  appId: "1:29592622407:web:4b3240b749d55019316862",
  measurementId: "G-V0NN9PERG8",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
