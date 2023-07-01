//seedear la base de datos de estudios
import { collection, addDoc } from "firebase/firestore";
import db from './firebase-config.js'
import estudios from '../estudios.js'


const estudiosRef = collection(db, "Estudios")

const promises = estudios.map((estudios) => addDoc(estudiosRef, estudios));

Promise.all(promises)
    .then(()=> process.exit(0))