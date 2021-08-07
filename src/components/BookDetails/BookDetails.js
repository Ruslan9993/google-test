import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBookDetails } from '../../axios/getBookDetails';

export const BookDetails = ({ match }) => {
  console.log(match)

  const dispatch = useDispatch();
  const { id } = match.params;
  const details = useSelector(state => state.books.details)
  useEffect(() => {
    dispatch(getBookDetails(id))
  }, [id, dispatch])
  return (
    <div>
      Some Info
      {JSON.stringify(details, null, 2)}
    </div>
  )
}
