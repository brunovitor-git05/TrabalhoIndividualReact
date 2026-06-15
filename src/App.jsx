import { useState } from 'react'
import { useEffect } from 'react'
import logo from "./assets/logo.svg"
import logo2 from "./assets/logo2.png"
import logo4 from "./assets/logo4.png"
import styled from 'styled-components'


const Main = styled.div`
  background-color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  box-sizing: border-box;
`
const Header = styled.header`
  background-color: #e00000;
  padding: 8px 32px;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`

const HeaderText = styled.h3`
  color: white;
  margin: 0;
  font-size: 15px;
`
const Titulo = styled.h1`
  font-size: 32px;
  text-align: center;
  margin: 0;
  color: black;
`
const Frase = styled.p`
  font-size: 17px;
  text-align: center;
  margin: 0;
  color:black;
`

const Card = styled.div`
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top:-100px;
`

const Input = styled.input`
  width: 100%;
  padding: 14px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  box-sizing: border-box;
  background-color: white;
  color: black;
`
const Botao = styled.button`
  background-color: #e00000;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
`

const LinkVermelho = styled.a`
  color: #e00000;
  text-decoration: none;
  font-size: 14px;
  

  &:hover {
    text-decoration: underline;
  }
`
const Texto = styled.p`
   text-align: center;
   color: #555;
   margin: 0;
`

const LinkGrena = styled.a`
  color: #e00000;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  justify-content: flex-end;

  &:hover {
    text-decoration: underline;
  }
`

const BotoesOAuth = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`

const BotaoOAuth = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: white;
  cursor: pointer;
  font-size: 14px;
  width: 100%;
  justify-content: center;

  &:hover {
    background-color: #f5f5f5;
  }
`

const LogoOAuth = styled.img`
  height: 20px;
  width: auto;
`

const Separador = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #aaa;
  font-size: 14px;
`

const Linha = styled.hr`
  flex: 1;
  border: none;
  border-top: 1px solid #ccc;
`

const InputLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: black;
`
const Logo = styled.img`
  height: 30px;
  width: auto;
  margin-top: 8px;
`


function App() {
 const [login, setLogin] = useState(false);
 const [identifier, setIdentifier] = useState(''); 
 const [senha, setSenha] = useState('');
 const validarCPF = (valor) => /^\d{11}$/.test(valor);
 const validarCNPJ = (valor) => /^\d{14}$/.test(valor);
 const validarEmail = (valor) => /\S+@\S+\.\S+/.test(valor);

  useEffect(() => {
  if (login) {
    if (identifier === "" || senha === "") {
      console.log("Preencha os campos de login e senha!");
    } else if (!validarCPF(identifier) && !validarCNPJ(identifier) && !validarEmail(identifier)) {
      console.log("Digite um CPF, CNPJ ou e-mail válido!");
    } else if (senha === "1234") {
      console.log("Login realizado com sucesso!");
    } else {
      console.log("Login ou senha incorretos!");
    }
    setLogin(false);
  }
}, [login]);

  return (
    <Main>
      <Header>
      <Logo src={logo} alt="Centauro" />
      <HeaderText>Ambiente 100% seguro</HeaderText>
      </Header>
      <main>
        <Card>
          <Titulo>Acesse sua conta</Titulo>
          <Frase>Entre e aproveite o melhor da Centauro</Frase>
      <BotoesOAuth>
         <BotaoOAuth>
          <LogoOAuth src={logo2} alt="Google" />
           Entrar com Google
         </BotaoOAuth>
         <BotaoOAuth>
          <LogoOAuth src={logo4} alt="Apple" />
            Entrar com Apple
         </BotaoOAuth>
      </BotoesOAuth>
          <Separador>
           <Linha />
           <span>ou</span>
           <Linha />
          </Separador>
          <InputLabel>CPF, CNPJ ou e-mail</InputLabel>
          <Input 
            type="text"
            placeholder="CPF, CNPJ ou e-mail"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
          
          <InputLabel>Informe sua senha</InputLabel>
          <Input 
            type="password" 
            placeholder="Digite sua senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          
         <LinkGrena href="#">Esqueci minha senha</LinkGrena>

         <Botao onClick={() => setLogin(true)}>Entrar</Botao>

         <Texto>Não tem uma conta? <LinkVermelho href="#">Crie sua conta Centauro</LinkVermelho></Texto>
      
        </Card>
      </main>
    </Main>
  );

}
export default App
