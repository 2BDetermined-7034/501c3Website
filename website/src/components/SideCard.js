import React, { Component } from 'react';

class SideCard extends Component {
    render() {
        return (
            <div className="card text-center mb-3">
                <div className="card-body">
                    <h5 className="card-title">{this.props.header}</h5>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default SideCard;