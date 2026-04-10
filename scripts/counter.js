import http from "k6/http"
import { Counter } from "k6/metrics";
export const options = {
    vus: 10,
    duration: '20s',
}        

const productosCounter = new Counter("productos_counter");
const categoriasCounter = new Counter("categorias_counter");
const usuariosCounter = new Counter("usuarios_counter");

export default function () {
    let response = http.get("https://api.escuelajs.co/api/v1/products")
    productosCounter.add(1);
    let categoria = http.get("https://api.escuelajs.co/api/v1/categories")
    categoriasCounter.add(1);
    let usuario = http.get("https://api.escuelajs.co/api/v1/users")
    usuariosCounter.add(1);
}