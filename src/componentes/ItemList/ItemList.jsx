import Item from '../Item/Item'


function ItemList({productos}) {
    
    return (
        <>
        {productos.map((producto)=>   <Item key={producto.id} producto={producto} id={producto.id}/> )}
        </>
        // <div>{
        //     loading ?
        //     <h2 className='cargando'>Cargando..</h2>
        //     :
        //     productos.map((productos)=> <Item
        //         key={productos.id}
        //         productos={productos}
        //     />
        //     )
        // }</div>
    )
}

export default ItemList