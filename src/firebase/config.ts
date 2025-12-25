
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  projectId: "studio-9832230977-6c6ca",
  apiKey: process.env.NEXT_FIREBASE_API_KEY,
  appId: process.env.NEXT_FIREBASE_APP_ID,
  authDomain: "studio-9832230977-6c6ca.firebaseapp.com",
  messagingSenderId: process.env.NEXT_FIREBASE_MESSAGING_SENDER_ID,
  measurementId: process.env.NEXT_FIREBASE_MEASUREMENT_ID, // optional
};

// export const app = initializeApp(firebaseConfig);
