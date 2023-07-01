import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDOzJpyQ-TPQNMF4RTmMkOpuPM6c1UDj54",
  authDomain: "portafolio-b3d77.firebaseapp.com",
  projectId: "portafolio-b3d77",
  storageBucket: "portafolio-b3d77.appspot.com",
  messagingSenderId: "479966369180",
  appId: "1:479966369180:web:d5b316310c574fce5ee459",
  measurementId: "G-3CCX05WGXV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;