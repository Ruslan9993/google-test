import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Book } from "../Book/Book";
import { Loader } from '../Loader/Loader';
import { LoadMore } from '../LoadMore/LoadMore';
import './Books.css';

export const Books = () => {
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.search.loading);
  const hasMore = useSelector((state) => state.books.hasMore);
  return (
    <div className='books'>

        <div className='books__block' >
          {books.map((book, index) => (
            <Link key={index} to={`/${book.id}`}>
              <Book book={book} />
            </Link>
          ))}
        </div>
        {loading && hasMore ? <Loader /> : null}
        <div className='books__btn'>
        {books.length && !loading && hasMore ?  <LoadMore /> : null}
        </div>
      </div>  
  );
};
