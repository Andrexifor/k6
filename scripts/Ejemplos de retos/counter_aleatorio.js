import http from "k6/http"
import { Counter } from "k6/metrics";
export const options = {
    vus: 10,
    duration: '20s',
}  
//Solucion A
/*
const productsCounter = new Counter('productsCounter', false);
const categoriesCounter = new Counter('categoriesCounter', false);
const usersCounter = new Counter('usersCounter', false);
const endpointBase = "https://api.escuelajs.co/api/v1";

const endpoints = [
    { name: "products", counter: productsCounter },
    { name: "categories", counter: categoriesCounter },
    { name: "users", counter: usersCounter }
]

export default function() {
    const randomNumber = Math.floor(Math.random() * endpoints.length);
    let randomEndpoint = endpoints[randomNumber];

    let response = http.get(`${endpointBase}/${randomEndpoint.name}`);
    randomEndpoint.counter.add(1);
}
*/
//Solucion B
const productsCounter = new Counter("called_products");
const categoriesCounter = new Counter("called_categories");
const userCounter = new Counter("called_users");

export default function(){
    var endPoints =[
        {
            url:"https://api.escuelajs.co/api/v1/products",
            counter:productsCounter
        },
        {
            url:"https://api.escuelajs.co/api/v1/categories",
            counter:categoriesCounter
        },
        {
            url:"https://api.escuelajs.co/api/v1/users",
            counter:userCounter
        }
    ]
    callRandomEndpoint(endPoints);
        
}

function callRandomEndpoint(arr){
    let numeroAleatorioRango = Math.floor(Math.random() * 3);
    let randomEndPoint = arr[numeroAleatorioRango];
    let response = http.get(randomEndPoint.url);
    randomEndPoint.counter.add(1);
}