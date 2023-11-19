import { useState } from "react";
import Botao from "@/src/components/botao";
import InputPublico from "@/src/components/inputPublico";
import Link from "next/link";

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
      <section className="paginaCadastro paginaPublica">
          <div className="tituloContainer">
            <h1>Sign up</h1>
          </div>
          <div className="conteudoPaginaPublica">
            <form>
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
                tipo="submit"
                texto={'SIGN UP'}
                manipularClick={() => console.log('clicou Cadastrar')}
                desabilitado={false}
              />
              <Botao
              // esse depois tem que virar um link para o login 
                // <Link href='/login'></Link>
                texto={'Log in'}
                cor="secundario"
                manipularClick={() => console.log('clicou Login')}
              />
            </form>
          </div>
      </section>
    </>
  );
}