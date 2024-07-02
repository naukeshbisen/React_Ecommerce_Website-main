const Contact = () => {
    return ( 
        <div className="container" id="contact">
            <h1 className="text-center">CONTACT US</h1>
            <div className="row" style={{marginTop: "50px"}}>
                
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <i className="fa-solid fa-envelope">Email :</i>
                        <h6>raipurElectronic12@gmail.com</h6>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <i className="fas fa-phone">Phone :</i>
                        <h6>+91 9111931957</h6>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <i className="fa-solid fa-location-dot">Address :</i>
                        <h6>M.G. Road, Raipur, Chhattisgarh</h6>
                    </div>
                </div>
            </div>

            <div className="row" style={{marginTop: "30px"}}>
                <div className="col-md-4 py-3 py-md-0">
                    <input type="text" className="form-control form-control" placeholder="Name"/>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <input type="text" className="form-control form-control" placeholder="Email"/>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <input type="number" className="form-control form-control" placeholder="Phone"/>
                </div>
               <div className="form-group" style={{marginTop: "30px"}}>
                <textarea className="form-control" id=""rows="5" placeholder="Message"></textarea>
            </div>
            <div id="messagebtn" className="text-center"><button>Submit</button></div>
            </div>
        </div>
     );
}
 
export default Contact;