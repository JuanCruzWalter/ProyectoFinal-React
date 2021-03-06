import "./ItemListContainer.css"
import {useEffect, useState} from 'react'

import ItemList from '../../componentes/ItemList/ItemList'
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"


function ItemListContainer({saludo}) {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId         } = useParams()
    const [valor,SetValor] = useState()
    
    useEffect(()=>{
        SetValor(categoriaId)
        if (categoriaId==null) {
            todaColeccion()
        }else{
            filtrado()
        }
        function todaColeccion(){
            const querydb = getFirestore()
             const queryCollection = collection(querydb, 'productos')
             getDocs(queryCollection)
             .then(resp => {setProductos(resp.docs.map(item => ({ id:item.id, ...item.data()})))
         setLoading(false)})
        }
        function filtrado(){
            const querydb = getFirestore()
            const queryCollection = collection(querydb, 'productos')
            const queryFilter = query(queryCollection, where('name','==',categoriaId))
            getDocs(queryFilter)
            .then(resp => {setProductos(resp.docs.map(item => ({ id:item.id, ...item.data()})))
           setLoading(false)})
        }
        
    },[categoriaId]) 
    


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
