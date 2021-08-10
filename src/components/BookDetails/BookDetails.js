import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookDetails } from "../../axios/getBookDetails";
import logo from "../../images/emptyBook.png";
import { Loader } from "../Loader/Loader";
import "./BookDetails.css";

export const BookDetails = ({ match }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const details = useSelector((state) => state.books.details);
  const detailsLoader = useSelector((state) => state.search.detailsLoader);
  useEffect(() => {
    dispatch(getBookDetails(id));
  }, [id, dispatch]);
  return (
    <React.Fragment>
      {!detailsLoader ? (
        <div className="book-details">
          <div className="book-detail__img">
            <div className="book-img">
              {!details.volumeInfo?.imageLinks ? (
                <img src={logo} alt="" />
              ) : (
                <img
                  src={details.volumeInfo?.imageLinks?.thumbnail}
                  alt={"book-img"}
                />
              )}
            </div>
          </div>

          <div className='book-details__info'>
            <p>{details.volumeInfo?.title}</p>
            <p>{details.volumeInfo?.authors?.[0]}</p>
            <div className='book-details__sub'>{details.volumeInfo?.subtitle}</div>
          </div>
        </div>
        
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
};
