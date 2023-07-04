import { useEffect, useState } from 'react';
import styles from './SobreMi.module.scss'
import { doc, getDoc } from 'firebase/firestore';
import db from '../../../db/firebase-config';

const SobreMi = () => {
  const hoy = new Date();
  let cantAnios = hoy.getFullYear() - 2000;
  const perfilRef = doc(db, "Perfil", "Yo");
  const [rutaImg, setRutaImg] = useState("")
  
  if((hoy.getMonth() < 9)||((hoy.getMonth() == 9)&&(hoy.getDate() < 28))){
    cantAnios--;
  }
  const getImg = async () => {
    const doc = await getDoc(perfilRef);
    const perfil = doc.data();
    setRutaImg(perfil.img);
  }

  useEffect(() => {
    getImg();
  }, [])
  
  return (
    <div className={styles.divPerfil}>
      <img src={rutaImg} alt="Foto de Jeremias Bracamonte" />
      <h4>Mi Nombre es Jeremias Bracamonte, tengo {cantAnios} años y soy desarrollador front-end con estudios realizados en Coder House. Los lenguajes y tecnologías que puedo utilizar son HTML5, CSS, Sass, Java Script, React js, entre otras. Estoy en busqueda de mi primer experiencia laboral en este ambito, si bien no soy un experto aprendo rápido y me adapto muy bien. Espero disfruten del sitio web y ojala podamos trabajar juntos </h4>
    </div>
  )
}

export default SobreMi