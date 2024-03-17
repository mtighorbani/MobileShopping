import { BASE_URL } from '@/global/urls'
import axios from 'axios'



   export default  axios.create({
        baseURL:BASE_URL,
   })
