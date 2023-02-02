import ibgeFetch from "../axios/config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



import "./NewMunicipio.css"



const newMunicipio = () => {

  const navigate = useNavigate();

  const [id, setId] = useState()
  const [nome, setNome] = useState()


const createMunicipio = async (e) => {
  e.preventDefault()
  

  const municipio = {id, nome}

  await ibgeFetch.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios" , {
    body: municipio,
  })

  navigate("/")
}

  return <div className="new-cadastro">
    <h2>Cadastre um município no banco</h2>
    <p>Anote a informações do municipio desejado para cadastrar no banco</p>
    <form onSubmit={(e) => createMunicipio(e)}>
      <div className="form-control">
        <label htmlFor="id">Id:</label>
        <input type="text" name="id" placeholder="ID do municipio" onChange={(e) => setId(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="nome">Nome:</label>
        <input type="text" name="name" placeholder="Nome do municipio" onChange={(e) => setNome(e.target.value)}/>
      </div>
      <input type="submit" value="Cadastrar" className="btn" />
    </form>
  </div>
}


export default newMunicipio