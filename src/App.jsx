import { useState } from 'react'
import styles from "./App.module.css"
import { useEffect } from 'react'
import logo from "./assets/logo.svg"
import logo2 from "./assets/logo2.png"
import logo4 from "./assets/logo4.png"

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
    <div className={styles.main}>
      <header className={styles.header}>
        <img src={logo} alt="Centauro" className={styles.logo} />
        <h3>Ambiente 100% seguro</h3>
      </header>
      <main>
        <div className={styles.card}>
          <h1>Acesse sua conta</h1>
          <p>Entre e aproveite o melhor da Centauro.</p>
          <div className={styles.botoesOAuth}>
            <button className={styles.botaoOAuth}>
                <img src={logo4} alt="Google" className={styles.logoOAuth} />
                Entrar com Google
            </button>
            <button className={styles.botaoOAuth}>
              <img src={logo2} alt="Apple" className={styles.logoOAuth} />
              Entrar com Apple
            </button>
          </div>
          <div className={styles.separador}>
              <hr className={styles.linha} />
              <span>ou</span>
              <hr className={styles.linha} />
            </div>
          <label className={styles.inputLabel}>CPF, CNPJ ou e-mail</label>
          <input 
             type="text"
             placeholder="CPF, CNPJ ou e-mail"
             value={identifier}
             onChange={(e) => setIdentifier(e.target.value)} 
             className={styles.input}
          />

          <label className={styles.inputLabel}>Informe sua senha</label>
          <input 
            type="password" 
            placeholder="Digite sua senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className={styles.input}
          />
          
          <a className={styles.linkGrena} href="#">Esqueci minha senha</a>

          <button className={styles.botao} onClick={() => setLogin(true)}>Entrar</button>

         <p>Não tem uma conta? <a className={styles.linkVermelho} href="#">Crie sua conta Centauro</a></p>
      
        </div>
      </main>
    </div>
  );

}
export default App
