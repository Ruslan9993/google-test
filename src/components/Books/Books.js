import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Book } from "../Book/Book";
import { Loader } from '../Loader/Loader';

export const Books = () => {
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.search.loading);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        books.map((book, index) => (
          <Link key={index} to={`/${book.id}`}>
            <Book book={book} />
          </Link>
        ))
      )}
    </div>
  );
};
