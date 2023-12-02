import './App.css';
import profile from './assets/usuario.png';
import email from './assets/email.png';
import pass from './assets/cadeado-trancado.png';

function App() {
  
  return (
    <>
     <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="perfil" className='profile' />
             
            </div>

          </div>
          <div>
            <h1>Login</h1>
            <div>
              <img src={email} alt="foto do ícone de email" className='email' />
              <input type="text" placeholder='Nome do usuario' className='name'/>
            </div>
            <div className='second-input'>
              <img src={pass} alt="foto do ícone de cadeado" className='pass' />
              <input type="password" placeholder='Nome do usuario' className='name'/>
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>

              <p className='link'><a href="#">Esqueceu a senha?</a> ou <a href="#">Cadastrar</a></p>
         
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
