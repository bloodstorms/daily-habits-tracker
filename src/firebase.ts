import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX5mokp7FJKatyln7KjioSPTeV9kMUES0",
  authDomain: "daily-habits-tracker-983e6.firebaseapp.com",
  projectId: "daily-habits-tracker-983e6",
  storageBucket: "daily-habits-tracker-983e6.appspot.com",
  messagingSenderId: "704528879373",
  appId: "1:704528879373:web:46cad984bb94b44cdaea44",
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export { firestore };
