import axios from 'axios'

const api = axios.create({
  baseURL: "https://goweek6.herokuapp.com"
})

export default api
