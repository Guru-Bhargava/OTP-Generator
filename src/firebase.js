import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCucof8g4gBf3O-1-frE6FChE12ax8-N7I5M",
  authDomain: "phone-auth-5852-1-1.firebaseapp.com",
  projectId: "phone-auth-5852-1-1",
  storageBucket: "phone-auth-5852-1-1.appspot.com",
  messagingSenderId: "8541721315-1-29",
  appId: "1:854172131529:web:0d08a3-1-bb926dde5f6cad18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
