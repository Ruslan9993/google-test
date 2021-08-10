import React from "react";
import logo from "../../images/emptyBook.png";
import "./Book.css";

export const Book = ({ book }) => {
  const authors = book.volumeInfo?.authors;
  return (
    <div className="book">
      <div className="book__img">
        {!book.volumeInfo?.imageLinks ? (
          <img className="card-img-top" src={logo} alt="" />
        ) : (
          <img
            className="card-img-top"
            src={book.volumeInfo?.imageLinks?.thumbnail}
            alt=""
          />
        )}
      </div>
      <div className="book__description">
        <span className="book__category">
          {book.volumeInfo?.categories?.[0]}
        </span>
        <span className="book__title">{book.volumeInfo?.title}</span>
        <span className="book__author">
          {authors?.map((d, index) => (
            <span key={index}>
              {d} {index < authors.length - 1 ? ", " : ""}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};
