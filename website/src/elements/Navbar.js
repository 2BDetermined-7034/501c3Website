import React, { Component, Fragment } from 'react';
import logo from '../artifacts/images/logo512.png';

class Navbar extends Component {
    render() {
        return(
            <Fragment>
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark text-center" style={{fontSize: '3rem'}}>
                    <div className="row w-100">
                        <div className="col-sm-5 navbar-nav pr-0">
                            <span className="navbar-text text-center text-sm-right align-middle w-100 font-weight-bold" style={{color: "white"}}>West Linn</span>
                        </div>
                        <div className="col-sm-2 navbar-nav pr-0 mx-0">
                            <a className="navbar-brand mx-0 w-100" href="#">
                                <img src={logo} width="100" height="100" alt="logo"/>
                            </a>
                        </div>
                        <div className="col-sm-5 navbar-nav pr-0">
                            <span className="navbar-text text-center text-sm-left align-middle w-100 font-weight-bold" style={{color: "white"}}>Robotics Organization</span>
                        </div>
                    </div>
                </nav>
            </Fragment>
        );
    }
}

export default Navbar;