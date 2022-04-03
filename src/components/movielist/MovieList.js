import React from "react";
import './MovieList.css';

export default({title, items}) => {
    return (
        <div className="movieList">
            <h2>{title}</h2>
            <div className="movieList--listarea">
                <div className="movieList--list">
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieList--item">
                            <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}/>
                        </div>
                ))}
                </div>
            </div>
        </div>
    );
}