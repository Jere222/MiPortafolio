import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Card from "../Card"
import { collection, getDocs, orderBy, query } from "firebase/firestore"
import db from "../../../db/firebase-config"
import styles from "./ItemsListContainer.module.scss"


const ItemListContainer = () => {
    const {id} = useParams();
    const [items, setItems] = useState([]);
    const nomColeccion = (id == "educacion")? "Estudios" : (id == "proyectos")? "Proyectos" : undefined;
    const itemsRef = collection(db, nomColeccion);
    const itemsQuery = query(itemsRef, orderBy("orden", "asc"))

    const getItems = async () => {
        const itemsCollection = await getDocs(itemsQuery)
        const docs = itemsCollection.docs.map(doc => ({...doc.data(), 'id' : doc.id}));
        setItems(docs);
    }

    useEffect(() => {
        getItems();
        
    }, [id])
    
    return(
        <div className={styles.divItems}>
            {items.map(item => (<Card key={item.id} item={item}/>))}
        </div>
    )
}

export default ItemListContainer