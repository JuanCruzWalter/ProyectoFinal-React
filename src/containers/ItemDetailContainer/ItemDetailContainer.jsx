import { collection, getDocs, getFirestore } from 'firebase/firestore'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "../../componentes/ItemDetail/ItemDetail"
import { getFetch } from '../helpers/getFetch'

function ItemDetailContainer() {
    const [productos, setProductos] = useState({})
    const [loading, setLoading] = useState (false)

    const {detailId} = useParams()


  useEffect( () => {
        const querydb = getFirestore()
            const queryCollection = collection(querydb, 'productos')
            getDocs(queryCollection)
            .then(resp => {setProductos(resp.docs.map(item => ({ id:item.id, ...item.data()})))
        setLoading(true)})
    // getFetch
    // .then(resp =>  setProductos(resp) )
    // .catch(err => console.log(err) )
    // .finally(() => setLoading(false))  
    },[]);

  

  return (
    <> 
        {loading ? (<ItemDetail 
        id ={productos[detailId].id}
        name ={productos[detailId].name}
        img ={productos[detailId].img}
        description ={productos[detailId].description}
        stock ={productos[detailId].stock}
        precio ={productos[detailId].precio}
      />) : (<></>)}
      
    </>
  )
}

export default ItemDetailContainer