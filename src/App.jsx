import ListaDePontosDeColeta from './components/listaPontosDeColeta'
import "./sass/app.scss"

// Arquivos JPG
import imagemMulher from "../public/mulherObservando.jpg"
import imagemDeMulheres from "../public/girlsTogether.jpg"
import imagemMulherP from "../public/mulherObservandoP.jpg"
import imagemDeMulheresP from "../public/girlsTogetherP.jpg"

// Arquivo AVIF
import imagemMulheravif from "../public/mulherObservando.avif"
import imagemMulherPavif from "../public/mulherObservandoP.avif"
import imagemDeMulheresavif from "../public/girlsTogether.avif"
import imagemDeMulheresPavif from "../public/girlsTogetherP.avif"


import 'bootstrap/js/dist/collapse';

function App() {
    const pontosDeColeta = [
        {
            nome: "CAMPB",
            endereco: "Endereço: R. Rafael Costabile, 719 - Centerville, Bertioga - SP, 11250-258"
        },
        {
            nome: "SABER/Anglo",
            endereco: "R. Antônio Saldanha, 110 - Centervalle, Bertioga - SP, 11250-000"
        },
        {
            nome: "FABE",
            endereco: "Av. Manoel da Nóbrega, 966 - Jardim Lido, Bertioga - SP, 11250-000"
        },
        {
            nome: "Viver Aprendendo",
            endereco: "R. Ivo Henrique, 69 - Vila Itapanhau, Bertioga - SP, 11250-234"
        }
    ]



    return (
        <>
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
                            <li className="nav-item">
                                <a className="nav-link" href="#pontosColeta">Pontos de Coleta</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <section id="capa" >
                <h1>Campanha Dignidade Feminina</h1>
                <p>Venha doar ou retirar absorvente</p>
            </section>
            <main className="container">
                <section id="sobre">
                    <h2>Sobre</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore molestias quod delectus repudiandae quos,
                        voluptatibus consequuntur nobis odio, molestiae suscipit minus, autem eveniet quas ipsa incidunt dolorem ab
                        provident esse?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nihil recusandae sunt numquam neque quae vero ex
                        est voluptate, delectus accusantium eius distinctio quia quo, omnis ad temporibus. Fugit, itaque.</p>
                    <div id="colection">

                        <figure className="figure-container">
                            <picture>
                                <source
                                    srcset={imagemMulheravif}
                                    media="(min-width: 1000px)"
                                    type="image/avif"
                                />

                                <source
                                    srcset={imagemMulher}
                                    media="(min-width: 1000px)"
                                    type="image/jpeg"
                                />

                                <source
                                    srcset={imagemMulherPavif}
                                    media="(max-width: 999px)"
                                    type="image/avif"
                                />

                                <img
                                    src={imagemMulherP}
                                    alt="Mulher olhando para baixo solitária"
                                    fetchpriority="high"
                                    className="img-fluid"
                                />
                            </picture>

                            <div className="overlay">
                                <figcaption>Você não esta sozinha</figcaption>
                            </div>
                        </figure>

                        <figure className="figure-container">
                            <picture>
                                <source srcset={imagemDeMulheres} media="(min-width: 1000px)" />
                                <img src={imagemDeMulheresP} alt="Mulher olhando para baixo solitaria" />

                            </picture>
                            <div class="overlay">
                                <figcaption>Estamos juntos com você</figcaption>
                            </div>
                        </figure>
                    </div>
                </section>
                <section id="doacao">
                    <h2>Como fazer doação?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, ut ipsam ipsa explicabo necessitatibus
                        dolores assumenda reiciendis nisi, suscipit, error illo cum ea fugiat. Eligendi dolores nobis blanditiis magnam
                        quos!</p>
                </section>
                <section id="coleta">
                    <h2>Como pegar meu absorvente?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim saepe iste neque animi eum possimus autem tempore
                        esse repudiandae atque pariatur sequi, at, dolor dicta doloremque aliquam similique assumenda ducimus!</p>

                </section>
                <section id="pontosColeta">
                    <h2>Pontos de Coleta</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non laudantium id assumenda fugiat nesciunt amet
                        corrupti aperiam mollitia beatae reiciendis maxime, iusto illo laboriosam veritatis a eius. Molestiae, assumenda
                        neque!</p>
                    <ul>
                        {pontosDeColeta.map((ponto, index) =>
                            <ListaDePontosDeColeta
                                key={index}
                                nome={ponto.nome}
                                endereco={ponto.endereco} />
                        )}
                    </ul>
                </section>
            </main>
            <footer>
                <hr />
                Criado por <a href="https://www.linkedin.com/in/hellen-cristina-araujo-da-silva/"> Hellen Cristina</a>
            </footer>
        </>
    )
}

export default App;
