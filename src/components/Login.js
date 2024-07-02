const Login = () => {
    return ( 
        <>
                  <div className="container login">
            <div className="row">
                <div className="col-md-4" id="side1">
                    <h3>Hello Friend!</h3>
                    <p>Create New Account</p>
                    <div id="btn"><a href="signup.html">Sign up</a></div>
                </div>
                <div className="col-md-8" id="side2">
                    <h3>Login Account</h3>
                    <div className="inp">
                        <input type="text" placeholder="User Name" required/>
                        <input type="text" placeholder="Password" required/>
                    </div>
                    <p>Forgot Your Password</p>
                    <div className="icons">
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div id="login"><button>LOG IN</button></div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Login;