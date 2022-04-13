import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye } from '@fortawesome/free-solid-svg-icons';
import FormW9 from '../artifacts/documents/W9.jpg';
import DeterminationForm from '../artifacts/documents/501c3.jpg';
import MainCard from '../components/MainCard';
import SideCard from '../components/SideCard';
import ListSideCard from '../components/ListSideCard';

class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-9">
                        <MainCard header="Mission Statement">
                            <p className="lead">
                            The purpose of West Linn Robotics Organization is to provide the funding and leadership for students in West
                            Linn to participate in FIRST Robotics Competition programs, including <a href="http://wlhsfrc.com/home">FRC team 7034</a>, and to support the
                            objectives of outreach outlined by FIRST. WLRO is organized exclusively for charitable, educational and
                            scientific purposes, including, for such purposes, the making of distributions to FIRST robotics teams, that
                            qualify as exempt organizations under section 501(c)(3) of the Internal Revenue Code.
                            </p>
                        </MainCard>
                        <MainCard header="Support Us">
                            <embed width="100%" height="175px" src="https://www.gofundme.com/f/team-funding-for-international-competitions/widget/medium/" type="text/html" />
                        </MainCard>
                    </div>
                    <div className="col-sm-3">
                        <SideCard header="IRS EIN">
                            <p className="card-text">85-1375698</p>
                        </SideCard>
                        <ListSideCard header="Documents">
                            <Document name="Form W-9" link={FormW9} />
                            <Document name="501c3 Determination" link={DeterminationForm} />
                        </ListSideCard>
                        {/* Use this format (with proper information) once the board is selected. Delete the SideCard below and uncomment this.
                        <ListSideCard header="Board Members">
                            <BoardMember name="First Last" title="Chair" address="wlhsfrc@gmail.com" />
                            <BoardMember name="First Last" title="Treasurer" address="wlhsfrc@gmail.com" />
                        </ListSideCard>
                        */}
                        <SideCard header="Board Members">
                            <p className="card-text font-italic">Board not yet selected. Please check back at a later date.</p>
                        </SideCard>
                        <SideCard header="Mailing Address">
                            <p>
                                West Linn Robotics Organization
                                <br />
                                5464 West A Street
                                <br />
                                West Linn OR 97068-3150
                            </p>
                        </SideCard>
                    </div>
                </div>
            </div>
        );
    }
}

class Document extends Component {
    render() {
        return(
            <li className="list-group-item">
                {this.props.name}
                &nbsp;&nbsp;
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEye} />
                </a>
                &nbsp;&nbsp;
                <a href={this.props.link} download={this.props.name}>
                    <FontAwesomeIcon icon={faDownload} />
                </a>
            </li>
        );
    }
}

class BoardMember extends Component {
    render() {
        return(
            <li className="list-group-item">
                <div className="row">
                    <div className="col-6 text-right">
                        <a href={`mailto:${this.props.address}`}>
                            {this.props.name}
                        </a>
                    </div>
                    <div className="col-6 text-left">
                        {this.props.title}
                    </div>
                </div>
            </li>
        );
    }
}

export default Home;