
import ProductDelete from "../api//products-api";




 const deleteProduct = (id:string)=>{
  ProductDelete.delete(id)
  .then((res)=>(res.data))
  
}
export default deleteProduct;
