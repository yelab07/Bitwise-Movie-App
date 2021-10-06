import React from "react";
import "./Modal.css";
const Modal = (props) => {
  const imgStyles = {
    backgroundImage: `url(${props.moviesList.Poster})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    height: "300px",
    width: "200px",
  };
  return (
    <div className="main-Container">
      {props.show && (
        <div className="modal-Container">
          <div className="info-Container">
            <div style={imgStyles}></div>
            <div className="infoText">
              <h1 className="infoTextItem">{props.moviesList.Title}</h1>
              <h3 className="infoTextItem">Actors:{props.moviesList.Actors}</h3>
              <h3 className="infoTextItem">Year:{props.moviesList.Actors}</h3>
              <h3 className="infoTextItem">
                Released:{props.moviesList.Actors}
              </h3>
              <h3 className="infoTextItem">Genre: {props.moviesList.Genre}</h3>

              <h1>Ratings</h1>
              {props.moviesList.Ratings.map((movie) => (
                <div className="ratings-Container">
                  <p>
                    {movie.Source} -{" "}
                    <span className="rating"> {movie.Value} </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="btnContainer">
            <button className="searchBtn" onClick={() => props.setShow(false)}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
