// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import github from "/src/Images/github.png";
import linkedin from "/src/Images/linkedin.png";
import logoMail from "/src/Images/logoMail.png";
import AboutMe from "./sections/aboutMe";
import { Projects } from "./sections/projects";

const TitleHome = () => {
  return (
    <>
      <section className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div id="drop">
          <div id="btn-drop" className="btn-group dropstart">
            <button
              id="menu-text"
              type="button"
              className="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
            </button>
            <ul id="menu-text" className="dropdown-menu">
              <li>
                <a id="drop-item" className="dropdown-item" href="#home">
                  {" "}
                  Home{" "}
                </a>
              </li>
              <li>
                <a id="drop-item" className="dropdown-item" href="#about-me">
                  {" "}
                  About me{" "}
                </a>
              </li>
              <li>
                <a id="drop-item" className="dropdown-item" href="#portfolio">
                  {" "}
                  Portfolio{" "}
                </a>
              </li>
              <li>
                <a id="drop-item" className="dropdown-item" href="#contact-me">
                  {" "}
                  Contact{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <section id="home">
          <div id="initial">
            <nav className="navbar">
              <div id="welcome" className="container-fluid">
                <p id="title" className="navbar-brand">
                  {" "}
                  I{`'`}m Francis Carrasco{" "}
                </p>
                <p id="title" className="navbar-brand">
                  {" "}
                  Welcome to my Portfolio!{" "}
                </p>
              </div>
            </nav>
          </div>
        </section>
      </section>

      <AboutMe />

      <Projects />

      {/* <section
        id="certifications"
        className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
      >
        <nav id="t-certifications" className="navbar">
          <div id="title-cert" className="container-fluid">
            <p> These are my certifications </p>
            <p> ⬇ Take a look ⬇ </p>
          </div>
        </nav>

        <section
          id="certifications-cards"
          className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
        >
          <div
            id="certifications"
            className="col-10 col-sm-8 col-md-8 col-lg-6 col-xl-4"
          >
            <button
              id="cert-btn"
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

            <Ruleta></Ruleta>

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

            <Moviefy></Moviefy>

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

            <KittyBook></KittyBook>

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

            <Ghibli></Ghibli>
          </div>
        </section>
      </section> */}

      <section
        id="contact-me"
        className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
      >
        <nav id="t-contact" className="navbar">
          <div id="title-contact" className="container-fluid">
            <p> Contact me 📩 </p>
          </div>
        </nav>

        <section
          id="contact"
          className="col-12 col-sm-12 col-md-9 col-lg-5 col-xl-5"
        >
          <div id="contact-link" className="card-body">
            <a
              id="linkedin"
              href="https://www.linkedin.com/in/francis-carrasco-gonzalez"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              {" "}
              <img id="logo-linkedin" src={linkedin}></img>
              LinkedIn
            </a>
            <a
              id="github"
              href="https://github.com/FrancisCG97"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              {" "}
              <img id="logo-gith" src={github}></img>
              GitHub
            </a>
            <p id="mail" className="card-link">
              {" "}
              <img id="logo-mail" src={logoMail}></img>
              f.carrasco.g.97@gmail.com
            </p>
          </div>
        </section>
      </section>

      <section
        id="footer"
        className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
      >
        <ul className="nav">
          <li className="nav-item">
            <a id="link" className="nav-link" href="#home">
              {" "}
              Home{" "}
            </a>
          </li>
          <li className="nav-item">
            <a id="link" className="nav-link" href="#about-me">
              {" "}
              About me{" "}
            </a>
          </li>
          <li className="nav-item">
            <a id="link" className="nav-link" href="#portfolio">
              {" "}
              Portfolio{" "}
            </a>
          </li>
          <li className="nav-item">
            <a id="link" className="nav-link" href="#contact-me">
              {" "}
              Contact{" "}
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default TitleHome;
