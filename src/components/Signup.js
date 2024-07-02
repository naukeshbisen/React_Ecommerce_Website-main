const Signup = () => {
    return ( 
        <div className="container login">
        <div className="row">
            <div className="col-md-4" id="side1">
                <h3>Welcome Back!!</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div id="btn"><a href="login.html">Login</a></div>
            </div>
            <div className="col-md-8" id="side2">
                <h3>Create Account</h3>
                <div className="inp">
                    <input type="text" placeholder="Name" required/>
                    <input type="email" placeholder="Email" required/>
                    <input type="text" placeholder="Password" required/>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="icons">
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
                <div id="login"><button>SIGN UP</button></div>
            </div>
        </div>
    </div>
     );
}
 
export default Signup;