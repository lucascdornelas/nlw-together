import React from 'react';

import "../styles/auth.scss";

import illustrationImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg"
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const NewRoom: React.FC = () => {
  return (
      <div id="page-auth">
          <aside>
              <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
              <h1>Toda pergunta tem uma resposta.</h1>
              <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
          </aside>
          <main>
              <div className="main-content">    
                <img src={logoImg} alt="logo letmeask"/>
                <form>
                    <h2>Crie uma nova sala</h2>
                    <input type="text" name="nameRoom" id="nameRoom" placeholder="Nome da sala"/>
                    <Button>Criar sala</Button>
                </form>
                <p>
                    Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link>
                </p>
              </div>
          </main>
      </div>
  );
}

export default NewRoom;