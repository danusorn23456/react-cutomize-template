import axios from 'axios'
import { setupInterceptorsTo } from '.'

const appAxios = axios.create()

setupInterceptorsTo(appAxios, "/")

export default appAxios;
