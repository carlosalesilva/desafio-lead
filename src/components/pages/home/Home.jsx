import React, { useEffect, useState } from 'react';
import Themovie from '../../../API/Themovie';
import MovieList from '../../movielist/MovieList';
import Navbar from '../../navbar/Navbar';
import './Home.css';

import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { AiOutlineCopyright } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { icons } from 'react-icons';



export default function Home() {

  const [movieList, setMovieList] = useState([]);


  //Quando a tela for carregada vai executar a função 
  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total 
      let list = await Themovie.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  function scrolltop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="page">
      <Navbar />
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieList key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      <div className='button-arrow'>
        <button className="button-scroll" onClick={scrolltop}>
          <i className="fa-solid fa-arrow-up"><MdOutlineKeyboardArrowUp style={{ fontSize: 30 }} /></i>
        </button>
      </div>
      <footer className='footer'>
        <div className="suave" >
        </div>
        <AiOutlineCopyright />
        <small>   Direitos Reservados 2022</small>
      </footer>
      {movieList.length <= 0 &&
        <div className='loading'>
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt carregando />
        </div>
      }
    </div>

  );
}