import React from 'react';
import logo from '../../images/emptyBook.png'

export const Book = ({ book }) => {
  return (
    <div className='book'>
      <div className='book-img'>
        {!book.volumeInfo?.imageLinks ? (
          <img src={logo}  alt='' />
        ) : (
          <img src={book.volumeInfo?.imageLinks?.thumbnail} alt='' />
        )}
      </div>
      <span className='book__category'>{book.volumeInfo?.categories?.[0]}</span>
      <span className='book__title'>{book.volumeInfo?.title}</span>
      <span className='book__author'>{book.volumeInfo?.authors?.[0]}</span>
    </div>
  )
}

