import styles from './SobreMi.module.scss'

const SobreMi = () => {
  const hoy = new Date();
  console.log()
  let cantAnios = hoy.getFullYear() - 2000;
  if((hoy.getMonth() < 9)||((hoy.getMonth() == 9)&&(hoy.getDate() < 28))){
    cantAnios--;
  }

  return (
    <div className={styles.divPerfil}>
      <img src="https://i.ibb.co/rpHCSYS/yo.jpg" alt="" />
      <h4>Mi Nombre es Jeremias Bracamonte, tengo {cantAnios} años y soy desarrollador front-end con estudios realizados en Coder House. Los lenguajes y tecnologías que puedo utilizar son HTML5, CSS, Sass, Java Script, React js, entre otras. Estoy en busqueda de mi primer experiencia laboral en este ambito, si bien no soy un experto aprendo rapido y me adapto muy bien. Espero disfruten del sitio web y ojala podamos trabajar juntos </h4>
    </div>
  )
}

export default SobreMi