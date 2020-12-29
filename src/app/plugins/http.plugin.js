import axios from "axios"

const http = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 2000,
})

export default http
