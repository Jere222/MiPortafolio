import styles from "./Contacto.module.scss"
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"
import { Link } from "react-router-dom"

const index = () => {
  return (
    <div>
        <div className={styles.divPerfil}>
            <h2>Email: infojbdesarrolloweb@gmail.com</h2>
            <h2>Número de contacto: +543471623031</h2>
            <h2>Mis redes:</h2>
            <div className={styles.redes}>
              <Link to="https://www.instagram.com/jereebracamonte/" target="_blank"><BsInstagram /></Link>
              <Link to="https://github.com/Jere222" target="_blank"><BsGithub /></Link>
              <Link to="https://www.linkedin.com/in/jeremias-bracamonte-285929259/" target="_blank"><BsLinkedin /></Link>
            </div>
        </div>
    </div>
  )
}

export default index