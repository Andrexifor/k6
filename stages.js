import http from "k6/http"

export let options = {
    stages: [
        { duration: "30s", target: 20 },
    
        { duration: "1m", target: 20 },
    
        { duration: "30s", target: 0 },
    ],
}        

export default function () {
    let response = http.get("https://api.escuelajs.co/api/v1/products")
}