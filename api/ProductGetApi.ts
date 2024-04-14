
import api from "./products-api";




 const deleteProduct = (id:string)=>{
  
  api.delete(id)
  .then((res)=>(res.data))
  
}
export default deleteProduct;
