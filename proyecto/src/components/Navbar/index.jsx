import { NavLink } from "react-router-dom"
import styles from './navbar.module.scss'
import {ImProfile} from 'react-icons/im'
import {GiBlackBook} from 'react-icons/gi'
import {MdWeb} from 'react-icons/md'
import {BiSolidContact} from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <NavLink to={"/"} className={styles.menuNavbar}> 
            <div>
                <div className={styles.logo}><ImProfile /></div>
                <p>Sobre Mi</p>
            </div>
        </NavLink>
        <NavLink to={"/educacion"} className={styles.menuNavbar}> 
            <div>
                <div className={styles.logo}><GiBlackBook /></div>
                <p>Educación</p>
            </div> 
        </NavLink>
        <NavLink to={"/proyectos"} className={styles.menuNavbar}>   
            <div>
                <div className={styles.logo}><MdWeb /></div>
                <p>Proyectos</p>
            </div>
        </NavLink> 
        <NavLink to={"/contacto"} className={styles.menuNavbar}> 
            <div>
                <div className={styles.logo}><BiSolidContact /></div>
                <p>Contacto</p>
            </div> 
        </NavLink>   
    </div>
  )
}

export default Navbar