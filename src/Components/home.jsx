import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const TitleHome = () => {

    return (
        <>
            <section className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
                <div id="initial">
                    <nav className="navbar">
                        <div id="welcome" className="container-fluid">
                            <p id="title" className="navbar-brand"> I{`'`}m Francis Carrasco </p>
                            <p id="title" className="navbar-brand"> Welcome to my Portfolio! </p>
                        </div>
                        <div id="drop">
                            <div className="btn-group dropstart">
                                <button id="menu-text" type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Menu
                                </button>
                                <ul id="menu-text" className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/"> Home </a></li>
                                    <li><a className="dropdown-item" href="#"> About me </a></li>
                                    <li><a className="dropdown-item" href="#"> Portfolio </a></li>
                                    <li><a className="dropdown-item" href="#"> Contact </a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
            <section id="about-me">
                <div className="card">
                    <div id="body-homepage" className="card-body">
                        Hi there! 
                        <br></br>
                        My name is Francis Carrasco and I{`'`}m a Front-end Developer recently graduated from Laboratoria Bootcamp. 💛
                        <br></br>
                        I like to use my creativity✨ along with my logical side to create code and web pages with focus on user experience and accessibility from different devices.
                        I have developed projects with JavaScript, React, HTML, CSS, Bootstrap, REST API. In addition, I have used Node.js, Firebase/Firestore.
                        <br></br>
                        Little Fun-Facts: 🎇
                        <br></br>
                        - I{`'`}m a big fan of DC Comics, especially Batman 🦇 (In case you hadn{`'`}t noticed).
                        <br></br>
                        - I listen to a lot of different music🎵. My favorite band is Rammstein💥, but I also listen to BLACKPINK and Queen.
                    </div>
                </div>
            </section>
        </>
    )
}

export default TitleHome;