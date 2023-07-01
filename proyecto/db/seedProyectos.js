//seedear la base de datos de proyectos
import { collection, addDoc } from "firebase/firestore";
import db from './firebase-config.js'
import proyectos from '../proyectos.js'


const proyectosRef = collection(db, "Proyectos")

const promises = proyectos.map((proyectos) => addDoc(proyectosRef, proyectos));

Promise.all(promises)
    .then(()=> process.exit(0))