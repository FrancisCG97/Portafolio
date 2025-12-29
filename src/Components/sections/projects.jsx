import { Ruleta } from "../projects/Ruleta";
import { Moviefy } from "../projects/Moviefy";
import { KittyBook } from "../projects/KittyBook";
import { Ghibli } from "../projects/Ghibli";
import { GatoOnline } from "../projects/gatoOnline";
import { ListaTareas } from "../projects/ListaTareas";

export const Projects = () => {
  return (
    <section
      id="portfolio"
      className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
    >
      <nav id="t-portfolio" className="navbar">
        <div id="title-portfolio" className="container-fluid">
          <p> Take a look to my </p>
          <p> ⬇ Projects! ⬇ </p>
        </div>
      </nav>

      <section
        id="projects-cards"
        className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
      >
        <div
          id="projects"
          className="col-10 col-sm-8 col-md-8 col-lg-6 col-xl-4"
        >

          <button
            id="project-btn"
            type="button"
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#gatoModal"
          >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> Gato Online </h5>
              </div>
            </div>
          </button>

          <GatoOnline />

          <button
            id="project-btn"
            type="button"
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#ruletaModal"
          >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> Ruleta al azar </h5>
              </div>
            </div>
          </button>

          <Ruleta />

          <button
            id="project-btn"
            type="button"
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#moviefyModal"
          >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> Moviefy </h5>
              </div>
            </div>
          </button>

          <Moviefy />

          <button
            id="project-btn"
            type="button"
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#kittybookModal"
          >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> Social Network: Kittybook </h5>
              </div>
            </div>
          </button>

          <KittyBook />

          <button
            id="project-btn"
            type="button"
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#dataGhibliLoversModal"
          >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> Data Ghibli Lovers </h5>
              </div>
            </div>
          </button>

          <Ghibli />

                    <button
            id="project-btn"
            type="button"
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#listaTareasModal"
          >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> Lista de tareas simple </h5>
              </div>
            </div>
          </button>

          <ListaTareas />
        </div>
      </section>
    </section>
  );
};
