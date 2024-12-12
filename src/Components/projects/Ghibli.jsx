import studioG from "/src/Images/studioG.PNG";

export const Ghibli = () => {
  return (
    <div
      className="modal fade"
      id="dataGhibliLoversModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {" "}
              Data Ghibli Lovers{" "}
            </h1>
          </div>
          <div className="modal-body">
            <img
              id="ghibli-image"
              src={studioG}
              className="card-img-top"
              alt="..."
            ></img>
            <p className="card-text">
              {" "}
              Data Ghibli Lovers it{`'`}s a webpage where users can find
              information about Studio Ghibli history, characters or animations.{" "}
            </p>
            <p className="card-text">
              {" "}
              This project was developed with HTML, JavaScript and CSS.{" "}
            </p>
          </div>
          <div className="modal-footer">
            <p className="card-text"> Do you want to see my project? </p>
            <br></br>
            <a
              href="https://franciscg97.github.io/Data-Ghibli-Lovers---Data-Lovers/"
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
