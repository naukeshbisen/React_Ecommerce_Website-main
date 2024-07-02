const Home = () => {
    return ( 
        <>
            <section className="home">
                <div className="content">
                    <h3>Excellence in Quality and Customer Service
                        <br/> <span>Up To 50% Off</span>
                    </h3>
                    <p>“Good customer service costs less than bad customer service.”</p>
                    {/* <button id="shopnow">Shop Now</button> */}
                </div>
                <div className="img">
                    <img src="./background.jpg" alt=""/>
                </div>
            </section>


            <div className="container" id="top-cards">
                <div className="row">
                    <div className="col-md-5 py-3 py-md-0">
                        <div className="card" style={{backgroundColor: "#a9a9a926"}}>
                            <img src="lappng.png" alt=""/>
                            <div className="card-img-overlay">
                                <h5 className="card-titel">Laptop</h5>
                                <p>Discover the perfect balance of style and functionality in our laptops.</p>
                                <p><strong>$500.76 <strike>$520.70</strike></strong></p>
                                <button>Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 py-3 py-md-0">
                        <div className="card" style={{backgroundCcolor: "#a9a9a926"}}>
                            <img src="headphone2.jpg" width = "90%" height = "50px" alt=""/>
                            <div className="card-img-overlay">
                                <h5 className="card-titel">Headphones</h5>
                                <p>Life sounds better with headphones on.</p>
                                <p><strong>$70.10 <strike>$72.10</strike></strong></p>
                                <button>Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card" style={{backgroundColor: "#a9a9a926"}}>
                            <img src="ledtv.webp" width = "100%" height = "60%" alt=""/>
                            <div className="card-img-overlay">
                                <h5 className="card-titel">LED TV</h5>
                                <p>“Television does not extend or amplify literate culture. It attacks it.”
                                </p>
                                <p><strong>$750.35 <strike>$770</strike></strong></p>
                                
                                <button>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="banner">
                <div className="content">
                    <h1>Get Up To 50% Off</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, animi?</p>
                    <div id="bannerbtn"><button>SHOP NOW</button></div>
                </div>
            </div>


            <div className="container" id="product-cards">
                <h1 className="text-center">PRODUCT</h1>
                <div className="row" style={{marginTop: "30px"}}>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card">
                            <img src="watch.jpg" height = "250px" alt=""/>
                            <div className="card-body">
                                <h3>Smart Watch</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="star">
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                </div>
                                <h5>$64.60 <strike>$66</strike> <span><i className="fa-solid fa-cart-shopping"></i></span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card">
                            <img src="cpu.webp" height = "250px" alt=""/>
                            {/* <img src="cpu.webp" alt=""/> */}
                            <div className="card-body">
                                <h3>CPU</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="star">
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                </div>
                                <h5>$310 <strike>$320</strike> <span><i className="fa-solid fa-cart-shopping"></i></span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card">
                            <img src="carvan.jpg" height = "250px" alt=""/>
                            <div className="card-body">
                                 <h3>Carvan</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="star">
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                </div>
                                <h5>$85.5 <strike>$90.50</strike> <span><i className="fa-solid fa-cart-shopping"></i></span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card">
                            <img src="earphone.webp" height = "250px" alt=""/>
                            <div className="card-body">
                                <h3>Earphone</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="star">
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                </div>
                                <h5>$9.60 <strike>$12.90</strike> <span><i className="fa-solid fa-cart-shopping"></i></span></h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" style={{marginTop: "30px"}}>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card">
                            <img src="bluetooth.jpg" height = "250px" alt=""/>
                            <div className="card-body">
                                <h3>Bluetooth</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="star">
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                </div>
                                <h5>$56.60 <strike>$60.50</strike> <span><i className="fa-solid fa-cart-shopping"></i></span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card">
                            <img src="keyboard.webp" height = "250px" alt=""/>
                            <div className="card-body">
                                <h3>Keyboard</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="star">
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                </div>
                                <h5>$25.30 <strike>$28</strike> <span><i className="fa-solid fa-cart-shopping"></i></span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card">
                            <img src="mouse.jpg"  height = "250px" alt=""/>
                            <div className="card-body">
                                <h3>Mouse</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="star">
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                </div>
                                <h5>$12.2 <strike>$15.60</strike> <span><i className="fa-solid fa-cart-shopping"></i></span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card">
                            <img src="joystick.jpg" height = "250px" alt=""/>
                            <div className="card-body">
                                <h3>Joystick</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="star">
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                </div>
                                <h5>$65.50 <strike>$70.60</strike> <span><i className="fa-solid fa-cart-shopping"></i></span></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="clothe.html" id="viewmorebtn">View More</a>
            </div>



            <div className="container" style={{marginTop: "100px"}}>
                <hr/>
            </div>
            <div className="container">
                <h3 style={{fontWeight: "bold;"}}>PRODUCT.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero eius ipsam incidunt illum totam nostrum quidem sit cumque fugit. Accusamus rem praesentium labore tempore ullam porro quaerat fugiat cum ipsum, sint perferendis voluptate ad, quod reiciendis officia! In voluptate quae expedita sunt eum placeat alias soluta. Rem commodi, impedit error doloribus ratione at provident beatae, aut doloremque sunt possimus voluptas recusandae nam aliquid eos quia minus harum repellat quae eveniet laborum dolore esse voluptate sed. Voluptate ullam dolor sapiente neque labore hic nam odio qui consectetur porro minima nesciunt suscipit vitae obcaecati reiciendis itaque ipsum unde, debitis nemo soluta!</p>

                <hr/>
            </div>
    



            <div className="container" id="offer">
                <div className="row">
                    <div className="col-md-4 py-3 py-md-0">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <h5>Free Shipping</h5>
                        <p>On order over $100</p>
                    </div>
                    <div className="col-md-4 py-3 py-md-0">
                        <i className="fa-solid fa-truck"></i>
                        <h5>Fast Delivery</h5>
                        <p>World wide</p>
                    </div>
                    <div className="col-md-4 py-3 py-md-0">
                        <i className="fa-solid fa-thumbs-up"></i>
                        <h5>Big Choice</h5>
                        <p>Of product</p>
                    </div>
                </div>
            </div>


        </>
     );
}
 
export default Home;