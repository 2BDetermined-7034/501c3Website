import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <footer className="footer bg-light">
                <div className="container">
                    <div className="row text-center pt-3 pb-2">
                        <p className="text-center w-100">
                            Copyright &copy; 2020 FRC Team 7034
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;