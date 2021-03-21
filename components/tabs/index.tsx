import Login from '@components/login';
import styles from './tabs.module.css';

export default function Tabs(){
  return (
    
    <section className="page-content" id="page-content">

      <div className="container login-tabs animate__animated animate__zoomInUp">
        <div className="row">
          <div className="col">
               
            <ul className="nav nav-pills justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="pill" href="#login1">Quero ser Cliente</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#login2">Quero ser Cheff</a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane container-fluid active" id="login1">
                <Login />
              </div>
              <div className="tab-pane container fade" id="login2">
                <Login />
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
    
  )
}