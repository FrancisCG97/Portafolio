import moviefyHome from "/src/Images/moviefyHome.PNG";

export const Moviefy = () => {
  return (
    <div
      className="modal fade"
      id="moviefyModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {" "}
              Moviefy{" "}
            </h1>
          </div>
          <div className="modal-body">
            <img
              id="moviefy-image"
              src={moviefyHome}
              className="card-img-top"
              alt="..."
            ></img>
            <p className="card-text">
              {" "}
              Moviefy it{`'`}s a webpage inspired in Internet Movie Database -or
              IMDB- where users can search information about movies, including:
              title, poster, original languaje and more.{" "}
            </p>
            <p className="card-text">
              {" "}
              This project was developed with HTML, JavaScript, React, CSS,
              Bootstrap, Axios, Vite and Vercel.{" "}
            </p>
          </div>
          <div className="modal-footer">
            <p className="card-text"> Do you want to see my project? </p>
            <br></br>
            <a
              href="https://movie-challenge-7ea8tuxub-franciscg97.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="card-text"
            >
              ✨ Click me! ✨
            </a>
            <br></br>
            <button
              id="close"
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
