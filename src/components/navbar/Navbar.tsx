function Navbar() {
  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between px-4 py-2 shadow">
        <h1 className="text-black text-lg font-bold uppercase">Farmacia Online</h1>
        <div>
          <ul className="flex items-center space-x-4">
            <li>
              <a href="#" className="text-black hover:text-gray-500">Home</a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-500">Cadastre-se</a>
            </li>
            <li>
              <button className="px-4 py-2 rounded bg-black text-white font-semibold">Login</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
