import { useLocation, useNavigate } from "react-router-dom";
import qs from "query-string";
import { useEffect, useState } from "react";
import { searchMovie } from "../services/Api";
import "../styles/SearchBar.scss";
import styled from "styled-components";
import { Spinner } from "react-bootstrap";

const Result = () => {
  const [movie, setMovie] = useState<any>();

  const navigate = useNavigate();
  const location = useLocation();
  const qsParams = qs.parse(location?.search);
  const str = qs.stringify(qsParams);
  const value = str.replace(/%20/g, "+");
  const result = value.slice(2, value.length);
  const searchResult = result.replace('+', " ")

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [result]);

  useEffect(() => {
    try {
      searchMovie(result).then((res) => {
        setMovie(res);
      });
    } catch (err) {
      console.log(err);
    }
  }, [result]);

  return (
    <>
      {movie ? (
        <div className="py-3">
          <h5 style={{ marginLeft: "15%" }}>Result for '{searchResult}'</h5>
          {movie?.map((data: any, i: number) => (
            <div className="d-flex justify-content-center my-2">
              <CardResult
                key={i}
                onClick={() => navigate(`/movie/${data?.id}`)}
              >
                <img
                  src={
                    data.poster_path === null
                      ? "/default-movie.png"
                      : `${import.meta.env.VITE_APP_BASEIMG}/${
                          data.poster_path
                        }`
                  }
                  alt=""
                  width={133}
                  height={200}
                />
                <div className="ms-3 mt-3">
                  <TitleTruncate className="title">{data.title}</TitleTruncate>
                  <h5>{data.release_date.slice(0, 4)}</h5>
                  <TextTruncate>{data.overview}</TextTruncate>
                  <div className="rate">
                    {data.vote_average} <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </CardResult>
            </div>
          ))}
        </div>
      ) : (
        <div className="loading top-0 start-0 translate-middle">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </>
  );
};

export default Result;

const CardResult = styled.div`
  display: flex;
  width: 70%;
  border: 1px solid var(--secondary);
  cursor: pointer;
  border-radius: 10px;
  padding-right: 15px;

  img {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

const TextTruncate = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.5rem;
`;

const TitleTruncate = styled.h1`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.5rem;
`;
