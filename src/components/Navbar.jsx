import React from 'react'
import './Navbar.scss'
import Logo from "../images/Logo.svg";
import Person from "../images/Login.svg";
import Mode from "../images/mode.svg";


function Navbar() {


    function displayTime() {
        var currentTime = new Date();
        var hrs = currentTime.getHours();
        var min = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
        var sec = (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();
        var session = "AM";

        document.getElementById('hrs').innerHTML = hrs;
        document.getElementById('min').innerHTML = min;
        document.getElementById('sec').innerHTML = sec;

    }
    setInterval(displayTime, 1000)

    return (
        <>
            <div className="container-fluid main-nav bg-custom-dark" id="navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-4 col-md-3 d-flex align-items-center col-logo">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Aratmak istediğin ogenin adini yaz." aria-label="Search" />
                                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                            </form>
                        </div>
                        <div className="col-lg-3 col-md-3 col-8 d-flex align-items-center justify-content-center col-right">
                            <div className="nav-right-col">
                                <div className="nav-acc-info">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <img src={Person} alt="" />
                                    </a>
                                    {/* <!-- Button trigger modal --> */}
                                    {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Launch demo modal
                                    </button> */}

                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Please sign in</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <form className='form-signin'> 
                                                        <div className="form-floating">
                                                            <input type="email" className="form-control" id="floatingInput" />
                                                            <label for="floatingInput">Email address</label>
                                                        </div>
                                                        <div className="form-floating">
                                                            <input type="password" className="form-control" id="floatingPassword" />
                                                            <label for="floatingPassword">Password</label>
                                                        </div>

                                                        <div className="checkbox mb-3">
                                                            <label>
                                                                <input type="checkbox" value="remember-me" /> Remember me
                                                            </label>
                                                        </div>
                                                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                                                    </form>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary">Save changes</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <img src={Mode} alt="" />
                                </div>
                                <span id="curr-time">
                                    <span id="hrs">00</span>
                                    <span>:</span>
                                    <span id="min">00</span>
                                    <span>:</span>
                                    <span id="sec">00</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;