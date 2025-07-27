import React, { useEffect, useRef, useState } from "react";
import "./titlecards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjkzMTQyNjVhMDliMDhjZWQ4OTg2OTc3MzQ4YmVhOCIsIm5iZiI6MTc1MjQ3NzY3OS41MDgsInN1YiI6IjY4NzRhZmVmOTAwYTdiY2NjNGVkODI5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zmd9qH27y8Ekq-0-E2TxgKxXRMs56LnsvlGbtGIJZvE",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
        options
      );
      const json = await response.json();
      setApiData(json.results);
    };
    fetchData();
  }, []);
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netfilx"}</h2>
      <div className="card-list">
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
