import { useState } from 'react'
import styles from "./App.module.css"
import { useEffect } from 'react'

function App() {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
   if (login) {
    if (email === "bruno@gmail.com" && senha === "1234") {
      console.log("Login realizado com sucesso!");
    } else if (email === "" || senha === "") {
      console.log("Preencha os campos de email e senha!");
    } else {
      console.log("Email ou senha incorretos!");
    }
    setLogin(false);
  }
  },[login]);

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h2>CENTAURO</h2>
        <h3>Ambiente 100% seguro</h3>
      </header>
      <main>
        <div className={styles.card}>
          <h1>Acesse sua conta</h1>
          <p>Entre e aproveite o melhor da Centauro.</p>
          <label className={styles.inputLabel}>Informe seu email</label>
          <input 
            type="text" 
            placeholder="Digite o seu email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className={styles.inputLabel}>Informe sua senha</label>
          <input 
            type="password" 
            placeholder="Digite sua senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
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
