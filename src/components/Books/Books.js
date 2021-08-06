import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Book } from '../Book/Book';


export const Books = () => {
  const books = useSelector(state => state.books.books)
  return (
    <div>
      {
        books.map((book, index) => (
          <Link key={index} to={`/${book.id}`}>
             <Book book={book}/>
          </Link>
        ))
      }
    </div>
  )
}
