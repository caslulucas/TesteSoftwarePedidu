import ibgeFetch from "../axios/config";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


import "./Home.css";

const home = () => {

  const [municipios, setmunicipios] = useState([])

  const getMunicipios = async () => {
    try{

      const response = await ibgeFetch.get("estados/33/municipios")
      

      const data = response.data
     setmunicipios(data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    getMunicipios()
  }, [])

  return <div className="home">
   <h1>Municípios do Rio de Janeiro</h1> 
   <br />
   {municipios.length === 0 ? (<p> Carregando...</p>) : (
    municipios.map((municipios, microrregioes) => (
      <div className="municipio" key={municipios.id}>
        <h2>{municipios.nome}</h2>
        <p>ID:{municipios.id}</p>
        <Link to={`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${municipios.id}`} className="btn">more info</Link>

       
      </div>
    ))
   )}
  </div>
    

  
}

export default home