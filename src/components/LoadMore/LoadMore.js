import React from 'react'
import { useDispatch } from 'react-redux'
import { changeIndex } from '../../redux/actions/searchActions';

export const LoadMore = () => {

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeIndex())
  }
  return (
    <button onClick={handleClick}>
      Click!
    </button>
  )
}
