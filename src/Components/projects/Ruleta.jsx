import ruleta from "/src/Images/ruleta.PNG";

export const Ruleta = () => {
  return (
    <div
      className="modal fade"
      id="ruletaModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {" "}
              Ruleta al azar{" "}
            </h1>
          </div>
          <div className="modal-body">
            <img
              id="ruleta-image"
              src={ruleta}
              className="img-fluid"
              alt="..."
            ></img>
            <p className="card-text">
              {" "}
              Ruleta al azar it{`'`}s a webpage in which the user can enter
              information through a file, and at the end of the roulette spin,
              it returns the winning object.{" "}
            </p>
            <p className="card-text">
              {" "}
              This project was developed with HTML, JavaScript, React, CSS,
              Bootstrap, Vite and Vercel.{" "}
            </p>
          </div>
          <div className="modal-footer">
            <p className="card-text"> Do you want to see my project? </p>
            <br></br>
            <a
              href="https://ruleta-al-azar.vercel.app"
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
