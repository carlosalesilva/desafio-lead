import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import './Details.css'
import { Link } from 'react-router-dom';

export default () => {
    const { id } = useParams();
    const [featuredData, setFeaturedData] = useState(null);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR&api_key=09673750951467d3f2598953b9c6216d`).then((res) => {
            setFeaturedData(res.data);
            console.log("Resposta", res.data);
        })

    }, []);
    return (
        
        <div className='movie-container'>
            {featuredData == null &&
            <div className='loading'>
            <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt carregando />
          </div>
            }
            {featuredData != null &&
                <div>
                    <img src={`https://image.tmdb.org/t/p/original${featuredData.backdrop_path}`} />
                    <div className='details'>
                        <h1>{featuredData.title}</h1>
                        <span>Sinopse: {featuredData.overview}</span>
                        <span className='release-date'>Pontuação: {featuredData.vote_average}</span>
                        <Link to='/'>
                        <button>Início</button>
                        </Link>
                    </div>
                </div>}
        </div>
    );


}