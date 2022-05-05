import "./ItemListContainer.css"
import {useEffect, useState} from 'react'

import ItemList from '../../componentes/ItemList/ItemList'
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore } from "firebase/firestore"


function ItemListContainer({saludo}) {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    // hook de react router dom
    const { categoriaId         } = useParams()

     useEffect(()=>{
            const querydb = getFirestore()
            const queryCollection = collection(querydb, 'productos')
            getDocs(queryCollection)
            .then(resp => {setProductos(resp.docs.map(item => ({ id:item.id, ...item.data()})))
        setLoading(false)})
     },[])

     
    


    return (
        <div >
            <p className="saludo">{saludo}</p><hr />
            
            {   loading ? 
                    <h2 className="cargando">Cargando...</h2>
                : 
                    <div className="contenedorCards">
                        <ItemList productos={productos} />
                    </div>                   
            
            }          

        </div> 
    )
 }

export default ItemListContainer
