import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({ img,name,precio, description}) {

    //si le paso el id [] si me los trae

    
    return (
      <>
      
        <div className="card">
            <img src={img} className="ItemDetail_img" alt="..."/>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h3 className="card-text">${precio}</h3>
                <p className="card-text">{description}</p>
                <ItemCount
                precio = {precio}
                name = {name}
                
                />
            </div>
         </div>
  
        {/* <div className="ItemDetail">
            <div className="ItemDetail_id">asd{producto.id}</div>
            <div >img <img className="ItemDetail_img" src={producto.img} alt="" /></div>
            <div className="ItemDetail_name">asd{producto.name}</div>
            <div className="ItemDetail_description">asd{producto.description}</div>
            <div className="ItemDetail_precio">asd{producto.precio}</div>
            <div className="ItemDetail_stock">asd{producto.stock}</div>
            <ItemCount/>
        </div> */}
         
      </>
    )
  }
  export default ItemDetail