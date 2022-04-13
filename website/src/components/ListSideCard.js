import React, { Component } from 'react';
import SideCard from './SideCard';

class ListSideCard extends Component {
    render() {
        return (
            <SideCard header={this.props.header}>
                <ul className="list-group list-group-flush">
                    {this.props.children}
                </ul>
            </SideCard>
        );
    }
}

export default ListSideCard;