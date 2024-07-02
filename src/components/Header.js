import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <>


    <div className="top-navbar">
        <div className="top-icons">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>&nbsp;
            <b className="fa-brands fa-instagram">&nbsp; &nbsp;Raipur_Electronics</b>
        </div>
        <div className="other-links">
            <button id="btn-signup"><Link to="/signup">Sign up</Link></button>&nbsp;&nbsp;
            <button id="btn-login"><Link to="/login">Login</Link></button>
            

            <i className="fa-solid fa-user"></i>
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
    </div>



        <nav className="navbar navbar-expand-lg" id="navbar">
            <div className="container-fluid">
              <Link className="navbar-brand" to="#"><img src="logoelectronic.jpg" alt="" width="180px"/></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span><i className="fa-solid fa-bars" style={{color: "white"}}></i></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/product">Product</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Category
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor: "#1c1c50;"}}>
                      <li><Link className="dropdown-item" to="#">Laptop</Link></li>
                      <li><Link className="dropdown-item" to="#">LED TV</Link></li>
                      <li><Link className="dropdown-item" to="#">Keyboard</Link></li>
                      <li><Link className="dropdown-item" to="#">Mouse</Link></li>
                      <li><Link className="dropdown-item" to="#">Washing Machine</Link></li>
                      <li><Link className="dropdown-item" to="#">HomeTheater</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                  </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                  </li>
                </ul>
               
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit" id="search-btn">Search</button>
                </form>
              </div>
            </div>
          </nav>
        















            {/* <div className="top-navbar">
                <div className="top-icons">
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"> &nbsp; &nbsp;N_Fashion Store</i>
            
                </div>
                <div className="other-links">
                    <button id="btn-login"><Link to="login.html">Login</Link></button>
                    <button id="btn-signup"><Link to="signup.html">Sign up</Link></button>

                    <i className="fa-solid fa-user"></i>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>


            <div className="home-section">

                <nav className="navbar navbar-expand-lg" id="navbar">
                    <div className="container-fluid">
                    <Link className="navbar-brand" to="#"><img src="logo.png" alt="" width="180px"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span><i className="fa-solid fa-bars" style={{color: "white"}}></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="index.html">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="clothe.html">Clothe</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor : "#1c1c50;"}}>
                                    <li><Link className="dropdown-item" to="#">T-Shirt</Link></li>
                                    <li><Link className="dropdown-item" to="#">Hoodies</Link></li>
                                    <li><Link className="dropdown-item" to="#">Pants</Link></li>
                                    <li><Link className="dropdown-item" to="#">Soprts Shoes</Link></li>
                                    <li><Link className="dropdown-item" to="#">Smart Watch</Link></li>
                                    <li><Link className="dropdown-item" to="#">Glasess</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about.html">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact.html">Contact Us</Link>
                            </li>
                        </ul>
               
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit" id="search-btn">Search</button>
                        </form>
                    </div>
                    </div>
                </nav>

            
            <section className="home">
                <div className="content">
                    <h3>Biggest Clothe Sale
                        <br/> <span>Up To 50% Off</span>
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque culpa, totam sed maxime animi facilis!</p>
                    <button id="shopnow">Shop Now</button>
                </div>
                <div className="img">
                    <img src="./b2.png" alt=""/>
                </div>
            </section>
            </div> */}
        </>
     );
}
 
export default Header;