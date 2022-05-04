const productos = [
  {id:"1", name:"remera", img:"https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw6a12c32e/products/NI_AV4896-492/NI_AV4896-492-1.JPG", description:"azul - algodon - nike",stock:"5",precio:"1500"},
  {id:"2", name:"chomba", img:"https://static.dafiti.com.ar/p/eyelit-4511-020365-1-zoom.jpg", description:"roja - pique - polo",stock:"10",precio:"2500"},
  {id:"3", name:"camisa", img:"https://m.media-amazon.com/images/I/61tW2B9UIiL._AC_UX569_.jpg", description:"blanca - lino - xyz",stock:"10",precio:"1800"},
  {id:"4", name:"pantalon", img:"https://static.dafiti.com.ar/p/eyelit-4511-020365-1-zoom.jpg", description:"negro - algodon - nike",stock:"10",precio:"2200"}
];
  
export const getFetch = new Promise (( resolve , reject )=>{
    let condition = true
    if (condition) { 
      setTimeout(() => {
        resolve(productos)
      }, 3000);
    } else {
      reject ("400 not found")
    }
  
});
  
  
  
  
  