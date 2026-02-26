import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import "./sass/app.scss"

import 'bootstrap/js/dist/collapse';

const Home = lazy(() => import('./pages/Home'))
const Contato = lazy(() => import('./pages/Contato'))

function App() {

    return (
        <Router>
            <Suspense fallback={<p class="Carregando">Carregando..</p>}>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/contato" element={<Contato />}/>
                </Routes>
            </Suspense>
        </Router>
    )
}

export default App;
