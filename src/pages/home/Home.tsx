function Home() {
  return (
    <>
      <div className="container mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center relative z-10">
        <div className="sm:w-1/2 xl:w-2/6 flex flex-col items-start py-24 sm:py-0">
          <h1 className="text-6xl xl:text-10xl text-green-900 font-bold leading-none">
            Farmacia Online
          </h1>
          <p className="xl:text-lg tracking-wider text-gray-700 mb-1">
            Os melhores produtos do mercado, agora com entrega na sua casa
          </p>

          <div className='flex flex-wrap items-center justify-between space-x-3'>
            <a
              href="#"
              className="text-white sm:font-xl uppercase py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg bg-green-900 hover:bg-green-800 mt-8 sm:mt-16"
            >
              Ver Produtos
            </a>
            <a
              href="#"
              className="text-white sm:font-xl uppercase py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg bg-green-900 hover:bg-green-800 mt-8 sm:mt-16"
            >
              Ver Categorias
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
