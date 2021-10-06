import React from "react";

const Movies = (props) => {
  return (
    <>
      {props.moviesList.map((movie) => 
        (
        <div >
            <img src={movie.Poster} alt="moviez" />
              {/* <div>{movie.title}</div>  */}
          </div>
        // {/* );
      ))}

      
    </>
  );
};

export default Movies;

// import React from "react";

// const Movies = (props) => (

// );

// export default Movies;
