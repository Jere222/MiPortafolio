import { Link } from "react-router-dom"
import styles from "./Card.module.scss"

const Card = ({item}) => {
  return (
    <Link to={item.href} target="_blank" className={styles.divCard}>
      <img src={item.img} alt={item.titulo} />
      <h4>{item.titulo}</h4>
      <div className={styles.divCardHover}>
      <div className={styles.mainPart}>
        <img src={item.img} alt={item.titulo} />
        <div>
          <h4>{item.titulo}</h4>
          <h5>{item.subTitulo}</h5>
        </div>
        </div>
        <p>{item.descripcion}</p>
      </div>
    </Link>
  )
}

export default Card