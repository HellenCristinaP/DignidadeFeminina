import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <nav className="navbar navbar-expand-md bg-body-tertiary">
                <div className="container-fluid d-flex flex-row">

                    <a className="navbar-brand" href="#">Dignidade Feminina</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Abrir menu">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF">
                            <path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" />
                        </svg>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#sobre">Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#doacao">Doação</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#coleta">Coleta</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/contato">Contato</a>
                            </li> */}
                        </ul>

                    </div>
                </div>
            </nav>
    <App />
  </React.StrictMode>,
)