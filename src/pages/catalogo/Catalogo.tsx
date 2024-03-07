import homeLogo from '../../assets/home.png'

function Catalogo() {
  return (
      <div className="bg-white text-black min-h-screen flex justify-center items-center">
          <div className='container mx-auto grid grid-cols-2 text-center'>
              <div className="flex flex-col gap-4 items-center justify-center py-4">
                  <h2 className='text-5xl font-bold'>Seja bem-vindo!</h2>
                  <p className='text-xl'>Encontre nossos produtos</p>
              </div>
              <div className="flex justify-center">
                  <img src={homeLogo} alt="" className='w-2/3' />
              </div>
          </div>
      </div>
  );
}

export default Catalogo;