import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { books } from "../../data";
import { Link } from "react-router-dom";

const Book = ( {book} ) => {
  return (
    <div className="book">
      <Link to="">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to="/" className="book__title--link">
          {book.title}
        </Link>
      </div>
      <div className="book__ratings">
        {
            new Array(Math.floor(book.rating)).fill(0).map((_, index) => 
            <FontAwesomeIcon icon="star" key={index} 
            />)
        }
        {
            !Number.isInteger(book.rating) && <FontAwesomeIcon icon="star-half-alt" />
        }
      </div>
      <div className="book__price">
        {book.salePrice ? (
            <div>
          <span className="book__price--normal">${book.originalPrice}</span>${book.salePrice}
          {books.salePrice}
            </div>
          
        ) : (
          `$${book.originalPrice}`
        )}
      </div>
    </div>
  );
};

export default Book;
