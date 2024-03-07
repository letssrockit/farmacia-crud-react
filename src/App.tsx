import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formulariocategorias/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria';
import ListaProduto from './components/produto/ListaProduto';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className='min-h-[80vh]'>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/categorias" element={<ListaCategorias/>} />
    <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
    <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
    <Route path="/deletarTema/:id" element={<DeletarCategoria />} />
    <Route path="/produtos" element={<ListaProduto />} />
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </>
);
}
export default App;