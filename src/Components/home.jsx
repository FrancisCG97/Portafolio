// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ruleta from '../Images/ruleta.png';
import github from "../Images/github.PNG";
import linkedin from "../Images/linkedin.PNG";
import loginKb from "../Images/loginKb.PNG";
import logoMail from "../Images/logoMail.PNG";
import moviefyHome from "../Images/moviefyHome.PNG";
import studioG from "../Images/studioG.PNG";


const TitleHome = () => {

    return (
        <>
            <section className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
                <div id="drop">
                    <div id="btn-drop" className="btn-group dropstart">
                        <button id="menu-text" type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Menu
                        </button>
                        <ul id="menu-text" className="dropdown-menu">
                            <li><a id="drop-item" className="dropdown-item" href="#home"> Home </a></li>
                            <li><a id="drop-item" className="dropdown-item" href="#about-me"> About me </a></li>
                            <li><a id="drop-item" className="dropdown-item" href="#portfolio"> Portfolio </a></li>
                            <li><a id="drop-item" className="dropdown-item" href="#contact-me"> Contact </a></li>
                        </ul>
                    </div>
                </div>
                <section id="home">
                    <div id="initial">
                        <nav className="navbar">
                            <div id="welcome" className="container-fluid">
                                <p id="title" className="navbar-brand"> I{`'`}m Francis Carrasco </p>
                                <p id="title" className="navbar-brand"> Welcome to my Portfolio! </p>
                            </div>
                        </nav>
                    </div>
                </section>
            </section>

            <section id="about-me">
                <div className="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8">
                    <div className="card">
                        <div id="body-about" className="card-body">
                            Hi there!
                            <br></br>
                            My name is Francis Carrasco and I{`'`}m a Front-end Developer recently graduated from Laboratoria Bootcamp. 💛
                            <br></br>
                            <br></br>
                            like to use my creativity✨ along with my logical side to create code and web pages with focus on user experience and accessibility from different devices.
                            I have developed projects with JavaScript, React, HTML, CSS, Bootstrap, REST API. Also, I have used Node.js, Firebase/Firestore.
                            <br></br>
                            <br></br>
                            Little Fun-Facts: 🎇
                            <br></br>
                            * I{`'`}m a big fan of DC Comics, especially Batman 🦇 (In case you hadn{`'`}t noticed).
                            <br></br>
                            * I listen to a lot of different music🎵. My favorite band is Rammstein💥, but I also listen to BLACKPINK and Queen.
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
                <nav id="t-portfolio" className="navbar">
                    <div id="title-portfolio" className="container-fluid">
                        <p> Take a look to my </p>
                        <p> ⬇ Projects! ⬇ </p>
                    </div>
                </nav>

                <section id="projects-cards" className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
                    <div id="projects" className="col-10 col-sm-8 col-md-8 col-lg-6 col-xl-4">
                        <button id="project-btn" type="button" className="btn" data-bs-toggle="modal" data-bs-target="#ruletaModal">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"> Ruleta al azar </h5>
                                </div>
                            </div>
                        </button>

                        <div className="modal fade" id="ruletaModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel"> Ruleta al azar </h1>
                                    </div>
                                    <div className="modal-body">
                                        <img id="ruleta-image" src={ruleta} className="img-fluid" alt="..."></img>
                                        <p className="card-text"> Ruleta al azar it{`'`}s a webpage in which the user can enter information through a file, and at the end of the roulette spin, it returns the winning object. </p>
                                        <p className="card-text"> This project was developed with HTML, JavaScript, React, CSS, Bootstrap, Vite and Vercel. </p>
                                    </div>
                                    <div className="modal-footer">
                                        <p className="card-text"> Do you want to see my project? </p>
                                        <br></br>
                                        <a href="https://ruleta-al-azar.vercel.app" className="card-text">
                                        ✨ Click me! ✨
                                        </a>
                                        <br></br>
                                        <button id="close" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button id="project-btn" type="button" className="btn" data-bs-toggle="modal" data-bs-target="#moviefyModal">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"> Moviefy </h5>
                                </div>
                            </div>
                        </button>

                        <div className="modal fade" id="moviefyModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel"> Moviefy </h1>
                                    </div>
                                    <div className="modal-body">
                                        <img id="moviefy-image" src={moviefyHome} className="card-img-top" alt="..."></img>
                                        <p className="card-text"> Moviefy it{`'`}s a webpage inspired in Internet Movie Database -or IMDB- where users can search information about movies, including: title, poster, original languaje and more. </p>
                                        <p className="card-text"> This project was developed with HTML, JavaScript, React, CSS, Bootstrap, Axios, Vite and Vercel. </p>
                                    </div>
                                    <div className="modal-footer">
                                        <p className="card-text"> Do you want to see my project? </p>
                                        <br></br>
                                        <a href="https://movie-challenge-7ea8tuxub-franciscg97.vercel.app" className="card-text">
                                        ✨ Click me! ✨
                                        </a>
                                        <br></br>
                                        <button id="close" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button id="project-btn" type="button" className="btn" data-bs-toggle="modal" data-bs-target="#kittybookModal">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"> Social Network: Kittybook </h5>
                                </div>
                            </div>
                        </button>

                        <div className="modal fade" id="kittybookModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel"> Kittybook </h1>
                                    </div>
                                    <div className="modal-body">
                                        <img id="kittybook-image" src={loginKb} className="card-img-top" alt="..."></img>
                                        <p className="card-text"> Kittybook it{`'`}s a Social Network by -and for- catlovers. Here you can have an user and Create, Read, Update and Delete posts. </p>
                                        <p className="card-text"> This project was developed with HTML, JavaScript in Single Page Application -or SPA-, CSS, Firebase Auth and Firestore Database. </p>
                                    </div>
                                    <div className="modal-footer">
                                        <p className="card-text"> Do you want to see my project? </p>
                                        <br></br>
                                        <a href="https://sn9-kittybook.firebaseapp.com" className="card-text">
                                        ✨ Click me! ✨
                                        </a>
                                        <br></br>
                                        <button id="close" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button id="project-btn" type="button" className="btn" data-bs-toggle="modal" data-bs-target="#dataGhibliLoversModal">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"> Data Ghibli Lovers </h5>
                                </div>
                            </div>
                        </button>

                        <div className="modal fade" id="dataGhibliLoversModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel"> Data Ghibli Lovers </h1>
                                    </div>
                                    <div className="modal-body">
                                        <img id="ghibli-image" src={studioG} className="card-img-top" alt="..."></img>
                                        <p className="card-text"> Data Ghibli Lovers it{`'`}s a webpage where users can find information about Studio Ghibli history, characters or animations. </p>
                                        <p className="card-text"> This project was developed with HTML, JavaScript and CSS. </p>
                                    </div>
                                    <div className="modal-footer">
                                        <p className="card-text"> Do you want to see my project? </p>
                                        <br></br>
                                        <a href="https://franciscg97.github.io/Data-Ghibli-Lovers---Data-Lovers/" className="card-text">
                                        ✨ Click me! ✨
                                        </a>
                                        <br></br>
                                        <button id="close" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section id="contact-me" className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
                <nav id="t-contact" className="navbar">
                    <div id="title-contact" className="container-fluid">
                        <p> Contact me 📩 </p>
                    </div>
                </nav>

                <section id="contact" className="col-12 col-sm-12 col-md-9 col-lg-5 col-xl-5">
                    <div id="contact-link" className="card-body">
                        <a id="linkedin" href="https://www.linkedin.com/in/francis-carrasco-gonzalez" className="card-link"> <img id="logo-linkedin" src={linkedin}></img>
                            LinkedIn
                        </a>
                        <a id="github" href="https://github.com/FrancisCG97" className="card-link"> <img id="logo-gith" src={github}></img>
                            GitHub
                        </a>
                        <p id="mail" className="card-link"> <img id="logo-mail" src={logoMail}></img>
                            f.carrasco.g.97@gmail.com
                        </p>
                    </div>
                </section>
            </section>

            <section id="footer" className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <ul className="nav">
                    <li className="nav-item">
                        <a id="link" className="nav-link" href="#home"> Home </a>
                    </li>
                    <li className="nav-item">
                        <a id="link" className="nav-link" href="#about-me"> About me </a>
                    </li>
                    <li className="nav-item">
                        <a id="link" className="nav-link" href="#portfolio"> Portfolio </a>
                    </li>
                    <li className="nav-item">
                        <a id="link" className="nav-link" href="#contact-me"> Contact </a>
                    </li>
                </ul>
            </section>

        </>
    )
}

export default TitleHome;