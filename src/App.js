import React,{ useEffect, useState } from 'react'; 
import Themovie from './API/Themovie';
import MovieList from './components/movielist/MovieList';
import Navbar from './components/navbar/Navbar';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';



export default () => {

  const [movieList, setMovieList] = useState([]);
  
    //Quando a tela for carregada vai executar a função 
    useEffect(()=>{
      const loadAll = async () => {
        //pegando a lista total 
        let list = await Themovie.getHomeList();
        setMovieList(list); 
      }
  
      loadAll();
    }, []);

  return (
    <BrowserRouter>
    <div className="page">
      <Navbar/>
        <section className="lists">
          {movieList.map((item, key)=>(
             <MovieList key={key} title={item.title} items={item.items}/>
          ))}
        </section>
        <footer className='footer'>
          <small>Direitos Reservados 2022</small> 
        </footer>
      </div>
    </BrowserRouter>
  );
}