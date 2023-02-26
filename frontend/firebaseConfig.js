import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,onSnapshot } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzU6EqKvtgNwcnHxmpP_uaf07cArvlpQw",
  authDomain: "farmstockapp.firebaseapp.com",
  projectId: "farmstockapp",
  storageBucket: "farmstockapp.appspot.com",
  messagingSenderId: "870267862328",
  appId: "1:870267862328:web:18c30b080efa2e4c61d5cd",
  measurementId: "G-3QRDBEYDWD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);


// onSnapshot(db, docsSnap => {
//   docsSnap.forEach(doc => {
//     console.log(doc.data());
//   })
// });

exports.db = db;
// exports.onSnapshot = onSnapshot;
