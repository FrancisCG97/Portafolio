import gato from "../../Images/gatoOnline.png";

export const GatoOnline = () => {
  return (
    <div
      className="modal fade"
      id="gatoModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {" "}
              Gato online{" "}
            </h1>
          </div>
          <div className="modal-body">
            <img
              id="gato-image"
              src={gato}
              className="img-fluid"
              alt="..."
            ></img>
            <p className="card-text">
              {" "}
              Gato Online it{`'`}s a web app where the user can play online Gato{" "}
              {`(or Tic-Tac-Toe)`} with another person.{" "}
            </p>
            <p className="card-text">
              {" "}
              The Frontend of this project was developed with HTML, TypeScript,
              Angular, SASS, and was deployed with Netlify. The Backend was
              developed with TypeScript and NodeJs, and was deployed with Render{" "}
            </p>
          </div>
          <div className="modal-footer">
            <p className="card-text"> Do you want to see my project? </p>
            <br></br>
            <a
              href="https://gato-en-vivo.netlify.app"
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
