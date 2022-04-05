import React, { useEffect, useState } from 'react';
import './Details.css';
import { useParams } from "react-router-dom";
import axios from 'axios';

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
            {featuredData != null &&
                <div className='details'>
                     <div className="featured--horizontal">
                    <div 
                    className="featured--name">{featuredData.original_title}
                    <img src={`https://image.tmdb.org/t/p/original${featuredData.backdrop_path}`}></img> 
                    </div>
                    </div>  
                </div>}
        </div>
    );


}