import React, { Component } from 'react';

class MainCard extends Component {
    render() {
        return(
            <div className="jumbotron text-center bg-white">
                <h1 className="display-4 font-weight-bold">{this.props.header}</h1>
                {this.props.children}
            </div>
        );
    }
}

export default MainCard;