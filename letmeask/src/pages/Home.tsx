import React from 'react';

import { firebase, auth } from "../services/firebase";

import "../styles/auth.scss";

import illustrationImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg"
import googleIconImg from "../assets/images/google-icon.svg"
import Button from '../components/Button';
// import { useHistory } from 'react-router';

const Home: React.FC = () => {
//   const history = useHistory()

  const handleCreateRoom = () => {
      const provider = new firebase.auth.GoogleAuthProvider();

      auth.signInWithPopup(provider).then(result => {
          console.log(result);
      });

  }

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
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Icone Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <input type="text" name="code" id="code" placeholder="Digite o código da sala"/>
                    <Button>Entrar na sala</Button>
                </form>
              </div>
          </main>
      </div>
  );
}

export default Home;