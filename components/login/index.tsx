import styles from './login.module.css';

export default function Login(){
  return (
    
    <div className="container login-container">
      <div className="row">

        <div className="col-md-6 offset-md-3 login-form-1">
          <h3>Quero ser cliente</h3>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Seu Email *" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Sua Senha *" />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Cadastre-se" />
            </div>
            <div className="form-group btn-spacer">
              <a href="user-signin.html" className="ForgetPwd" >Entrar</a>
              <a href="#" className="ForgetPwd">Esqueceu sua senha?</a>
            </div>
          </form>
        </div>

      </div>
    </div>
    
  )
}