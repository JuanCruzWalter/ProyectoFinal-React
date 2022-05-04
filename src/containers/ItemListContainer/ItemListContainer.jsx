import "./ItemListContainer.css"
import {useEffect, useState} from 'react'
import { getFetch } from '../helpers/getFetch'
import ItemCount from '../../componentes/ItemCount/ItemCount'
import ItemList from '../../componentes/ItemList/ItemList'
import { useParams } from "react-router-dom"
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore"


function ItemListContainer({saludo}) {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    // hook de react router dom
    const { categoriaId } = useParams()

     useEffect(()=>{
            const querydb = getFirestore()
            const queryCollection = collection(querydb, 'productos')
            getDocs(queryCollection)
            .then(resp => {setProductos(resp.docs.map(item => ({ id:item.id, ...item.data()})))
        setLoading(false)})
     },[])
    // useEffect(()=> {
    //     if (categoriaId) {
    //         getFetch // funcion que simula una api
    //         // .then(resp =>{ 
    //         //     //throw new Error('ESto es un error')//insatanciando un error
    //         //     console.log(resp)
    //         //     return resp
    //         // })
    //         .then(resp => setProductos(resp.filter(item => item.categoria === categoriaId)) )
    //         .catch(err => console.log(err))
    //         .finally(() => setLoading(false))            
            
    //     } else {            
    //         getFetch // funcion que simula una api
    //         // .then(resp =>{ 
    //         //     //throw new Error('ESto es un error')//insatanciando un error
    //         //     console.log(resp)
    //         //     return resp
    //         // })
    //         .then(resp => setProductos(resp) )
    //         .catch(err => console.log(err))
    //         .finally(() => setLoading(false))            
    //     }
    // }, [categoriaId])

    // const getFetchApi = async () => {
    //     try {
    //         const query = await fetch('/assets/DATA.json')// por defecto va un verbo tipo get
    //         const queryParse = await query.json()
    //         console.log(queryParse)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }    
    


    //como usar la función fetch
    // useEffect(()=>{
    //     fetch('/assets/DATA.json')// por defecto va un verbo tipo get
    //     .then(data => data.json())
    //     .then(resp => console.log(resp))
    // }, [])

    // useEffect( ()=>{
    //     getFetchApi()
    // }, [])


    // console.log(categoriaId)

    return (
        <div>
            <p className="saludo">{saludo}</p><hr />
            
            {   loading ? 
                    <h2 className="cargando">Cargando...</h2>
                : 
                    <div>
                        <ItemList productos={productos} />
                    </div>                   
            
            }          

        </div> 
    )
 }

export default ItemListContainer
