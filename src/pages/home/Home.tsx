import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="container mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center relative z-10">
        <div className="sm:w-1/2 xl:w-2/6 flex flex-col items-start py-24 sm:py-0">
          <h1 className="text-6xl xl:text-10xl text-blue-500 font-bold leading-none">
            Farmácia Online
          </h1>
          <p className="xl:text-lg tracking-wider text-black mb-1">
            Os melhores produtos do mercado, agora com entrega na sua casa
          </p>

          <div className='flex flex-wrap items-center justify-between space-x-3'>
            <Link
              to="/produtos" // Altere aqui para o path da página de produtos
              className="text-blue-500 uppercase py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg bg-white hover:bg-blue-100 mt-8 sm:mt-16"
            >
              Ver Produtos
            </Link>
            <Link
              to="/categorias" // Altere aqui para o path da página de categorias
              className="text-blue-500 uppercase py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg bg-white hover:bg-blue-100 mt-8 sm:mt-16"
            >
              Ver Categorias
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
