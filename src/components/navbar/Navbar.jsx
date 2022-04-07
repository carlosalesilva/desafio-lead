import './Navbar.css'
import { BsSearch } from 'react-icons/bs'
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const Navbar = () => {
  const { id } = useParams();
  const [featuredData, setFeaturedData] = useState(null);
  const [textData, setTextData] = useState("");
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?language=pt-BR&api_key=09673750951467d3f2598953b9c6216d`).then((res) => {
        setFeaturedData(res.data);
        console.log("Resposta", res.data);
    })

}, []);

  return (
    <div class="topnav">
      <a class="active" href="#home">Desafio Lead</a>
      <div class="search-container">
        <form>
          <input type="text" placeholder="Procurar.." name="search" value={textData} onChange={(e)=>setTextData(e.target.value)}/> 
          <button type="submit"><BsSearch /></button>
        </form>
      </div>
    </div>
  );
}
export default Navbar;

