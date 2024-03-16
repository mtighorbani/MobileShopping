import { BASE_URL } from '@/components/global/urls'
import axios from 'axios'



   export default  axios.create({
        baseURL:BASE_URL,
   })
