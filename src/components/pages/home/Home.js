import React, { useEffect, useState } from 'react';
import Themovie from '../../../API/Themovie';
import MovieList from '../../movielist/MovieList';
import Navbar from '../../navbar/Navbar';
import './Home.css';

import {MdOutlineKeyboardArrowUp} from 'react-icons/md'
import { Link } from 'react-router-dom';



export default function Home() {

  const [movieList, setMovieList] = useState([]);
 
  const [scrollX, setScrollX] = useState(-400);
  function handleUpArrow () {
    let x = scrollX + Math.round(window.innerHeight);
    if (x > 0) {
        x = 0;
    }
    setScrollX(x);
}
  
  //Quando a tela for carregada vai executar a função 
  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total 
      let list = await Themovie.getHomeList();
      setMovieList(list);
      //Pegando o featured
      
    }

    loadAll();
  }, []);

  return (
    <div className="page">
      <Navbar />
      
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieList key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      <footer className='footer'>
        <div className="suave" > 
        <button >
          <Link to='/details'>
            <MdOutlineKeyboardArrowUp style={{ fontSize: 50 }}/>
          </Link>
        </button>
        
        </div>
        <small>Direitos Reservados 2022</small>
      </footer>
      {movieList.length <= 0 &&
        <div className='loading'>
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt carregando />
        </div>
      }
    </div>

  );
}