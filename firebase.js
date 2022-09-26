import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "mytopfive-d4247.firebaseapp.com",
  projectId: "mytopfive-d4247",
  storageBucket: "mytopfive-d4247.appspot.com",
  messagingSenderId: "271506916503",
  appId: "1:271506916503:web:e5325b933d5329c82095d2",
  measurementId: "G-BDS8KYVT6L"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); 
