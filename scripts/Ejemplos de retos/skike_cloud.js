import http from "k6/http"

export let options = {
    Stages: [
        { duration: '10s', target: 10 }, 
        { duration: '1m', target: 400 },
    ],
    /*
    ext: {
        loadimpact: {
            name: "Skike Cloud",
            proyectID: 12345,
            "StaticID": true,
            distribution: {
                distributionLabel1: {
                    loadZone: "amazon:us:virginia",
                },
                distributionLabel2: {
                    loadZone: "amazon:ie:dublin",
                }
            }
        }
    }
        */
};
export default function () {
    let response = http.get("https://rickandmortyapi.com/api/character")
}