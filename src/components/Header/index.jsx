import { FiSearch } from "react-icons/fi"

import { Input } from "../Input";

import { Container, Profile } from "./styles";

export function Header(){
  return(
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" icon={FiSearch} />

      <Profile>
        <div>
          <strong>Joacir Sampaio</strong>
          <a href="#">sair</a>
        </div>
        
        <img src="https://github.com/joacirscn.png" alt="Foto do usuário" /> 

      </Profile>
    </Container>
  )
}