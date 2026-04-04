import http from "k6/http"

export let options = {
    vus: 10, 
    duration: '10s'

}        

export default function () {
    let response = http.get("https://api.escuelajs.co/api/v1/products")
}