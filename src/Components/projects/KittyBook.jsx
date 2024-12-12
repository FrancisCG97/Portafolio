import loginKb from "/src/Images/loginKb.PNG";

export const KittyBook = () => {
  return (
    <div
      className="modal fade"
      id="kittybookModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {" "}
              Kittybook{" "}
            </h1>
          </div>
          <div className="modal-body">
            <img
              id="kittybook-image"
              src={loginKb}
              className="card-img-top"
              alt="..."
            ></img>
            <p className="card-text">
              {" "}
              Kittybook it{`'`}s a Social Network by -and for- catlovers. Here
              you can have an user and Create, Read, Update and Delete posts.{" "}
            </p>
            <p className="card-text">
              {" "}
              This project was developed with HTML, JavaScript in Single Page
              Application -or SPA-, CSS, Firebase Auth and Firestore Database.{" "}
            </p>
          </div>
          <div className="modal-footer">
            <p className="card-text"> Do you want to see my project? </p>
            <br></br>
            <a
              href="https://sn9-kittybook.firebaseapp.com"
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
