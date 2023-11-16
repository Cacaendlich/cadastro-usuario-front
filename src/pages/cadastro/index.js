import { useState } from "react";
import Botao from "@/src/components/botao";
import InputPublico from "@/src/components/inputPublico";

export default function Cadastro() {
  return (
    <CadastroCard />
  );
}

function CadastroCard() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <div className="cadastro-container">
          <h1>Sign up</h1>
          
          <InputPublico 
            placeholder={'Nome'}
            tipo={'text'}
            aoAlterarValorInput={evento => setNome(evento.target.value)}
            valorInput={nome}
          />

          <InputPublico 
            placeholder={'Email'}
            tipo={'email'}
            aoAlterarValorInput={evento => setEmail(evento.target.value)}
            valorInput={email}
          />

          <InputPublico 
            tipo={'password'} 
            placeholder={'Password'}
            aoAlterarValorInput={evento => setPassword(evento.target.value)}
            valorInput={password}
          />

          <Botao 
            texto={'SIGN UP'} 
            manipularClick={() => console.log('clicou Cadastrar')}
            desabilitado={false}
          />

          <Botao 
            texto={'Log in'} 
            cor="secundario" 
            manipularClick={() => console.log('clicou Login')}
          />
      </div>
    </>
  );
}