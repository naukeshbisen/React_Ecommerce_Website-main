const Footer = () => {
    return ( 
        <>

        
            <footer id="footer" style={{margintop: "50px"}}>
<div className="footer-top">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-6 footer-content">
                <h3>Electronic's</h3>
                <p>The basics of electronics refer to the concepts that include inductance, capacitance, resistance, voltage and electrical currents.</p>
                
                    M.G. Road, Raipur <br/>
                    Nehru Nagar, Durg <br/>
                    Hyderabad <br/>
                
                <strong><i className="fas fa-phone"></i> Phone: <strong>+91 9111931957</strong></strong><br/>
                <strong><i className="fa-solid fa-envelope"></i> Email: <strong>raipurElectronic12@gmail.com</strong></strong>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
                <h4>Usefull Links</h4>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="contact.html">Contact</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Privacy policay</a></li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <p>“Good service is good business.”</p>
                <ul>
                    <li><a href="#">Laptop</a></li>
                    <li><a href="#">Home Appliace</a></li>
                    <li><a href="#">Fashion</a></li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Network</h4>
                <p>Welcome to our social media </p>
                <div className="socail-links mt-3">
                    <a href="#" className="twiiter"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#" className="twiiter"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.facebook.com/" target="_blank" className="twiiter"><i className="fa-brands fa-google-plus"></i></a>
                    <a href="https://www.instagram.com/?hl=en" target="_blank" className="twiiter"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/naman-pandey-b3ab2b249/" target="_blank" className="twiiter"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
<hr/>
<div className="container py-4">
    <div className="copyright">
        &copy; Copyright <strong>Fashion</strong>.All Rights Reserved
    </div>
    <div className="credits">
        Designed By <a href="https://www.linkedin.com/in/naman-pandey-b3ab2b249/" target="_blank">Naman Pandey</a>
    </div>
</div>
</footer>

<a href="#" className="arrow"><i><img src="up-arrow.png" alt="" width="50px"/></i></a>

        </>
     );
}
 
export default Footer;