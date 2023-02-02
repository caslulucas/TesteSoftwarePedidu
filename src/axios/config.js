import axios from "axios";

const ibgeFetch = axios.create({
    baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/",
    headers: {
        "Content-type": "application/json"
    }

})

export default ibgeFetch