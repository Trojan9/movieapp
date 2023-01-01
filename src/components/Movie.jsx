import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';

const Movie = ({ movie:{ imageurl, title, duration, rating,id } }) => {
  return (
    <div>
      <Link to={`/play/${id}`}>
        <div className="product-card">
          <img 
            src={imageurl}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{title}</p>
          <p className="product-price"><span>Duration:</span>{duration}</p>
        </div>
      </Link>
    </div>
  )
}

export default Movie