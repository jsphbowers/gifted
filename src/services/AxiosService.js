import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const giphyApi = new Axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  timeout: 5000,
  params: { api_key: 'LUoaIOz6CBpCaFaWBaArmfPbsTqg5BMz' }
})

export const sandboxApi = new Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/',
  timeout: 5000
})