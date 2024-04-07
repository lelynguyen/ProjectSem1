import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyC1OFnNxua8gug0weaulWJ40Qd6m_mbj6M",
  authDomain: "sell-course.firebaseapp.com",
  databaseURL:
    "https://sell-course-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sell-course",
  storageBucket: "sell-course.appspot.com",
  messagingSenderId: "834060936093",
  appId: "1:834060936093:web:37925848611d7f877fc574",
  measurementId: "G-MX82MDNJKM",
};

const app = initializeApp(firebaseConfig);
export default app;
