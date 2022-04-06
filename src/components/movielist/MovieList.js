import React, { useState } from "react";
import './MovieList.css';
import { MdNavigateNext } from 'react-icons/md';
import { MdNavigateBefore } from 'react-icons/md';
import { Link } from "react-router-dom";

export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(-400);
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);

      
    }
    function scrolltop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }

    return (
        <div className="movieList">
            <h2>{title}</h2>
            <div className="movieNavegation--left" onClick={handleLeftArrow}>
                <MdNavigateBefore style={{ fontSize: 50 }} />
            </div>
            <div className="movieNavegation--rigth" onClick={handleRightArrow}>
                <MdNavigateNext style={{ fontSize: 50 }} />
            </div>
            <div className="movieList--listarea">
                <div className="movieList--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieList--item">
                            <Link to={`/details/${item.id}`} onClick={scrolltop}>
                                <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}