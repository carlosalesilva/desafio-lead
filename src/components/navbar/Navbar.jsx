import './Navbar.css'
import { BsSearch } from 'react-icons/bs'

const Navbar = () => {

  return (
    <div class="topnav">
      <a class="active" href="#home">Desafio Lead</a>
      <a href="#about">Filtrar por gênero</a>
      <a href="#contact">Filtrar por categorias</a>
      <div class="search-container">
        <form>
          <input type="text" placeholder="Procurar.." name="search" />
          <button type="submit"><BsSearch /></button>
        </form>
      </div>
    </div>
  );
}
export default Navbar;

