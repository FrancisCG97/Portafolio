import lista from "../../Images/listaTareas.PNG";

export const ListaTareas = () => {
  return (
    <div
      className="modal fade"
      id="listaTareasModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {" "}
              Lista de tareas simple{" "}
            </h1>
          </div>
          <div className="modal-body">
            <img
              id="list-image"
              src={lista}
              className="img-fluid"
              alt="..."
            ></img>
            <p className="card-text">
              {" "}
              Lista de Tareas it{`'`}s a web app where the user can make a list of chores
              to do, adding new ones, marking them as completed or deleting them when 
              finished, also you can filter them by all, completed or pending.{" "}

            </p>
            <p className="card-text">
              {" "}
              The Frontend of this project was developed with HTML, JavaScript,
              React, CSS, and was deployed with Vercel.
              The purpose of this project was to improve the use of Jest and 
              React Testing Library in a CRUD. {" "}
            </p>
          </div>
          <div className="modal-footer">
            <p className="card-text"> Do you want to see my project? </p>
            <br></br>
            <a
              href="https://lista-tareas-kappa.vercel.app"
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
