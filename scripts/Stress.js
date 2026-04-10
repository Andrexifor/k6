import { sleep } from "k6"
import http from "k6/http"

export let options = {
    Stages: [
        { duration: '2m', target: 100 }, 
        { duration: '5m', target: 100 }, 
        { duration: '2m', target: 400 },
        { duration: '2m', target: 400 },  
    ]
}        

export default function () {
    let response = http.get("https://api.escuelajs.co/api/v1/products")
    sleep(1);
}