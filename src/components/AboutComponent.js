import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStop} from "@fortawesome/free-solid-svg-icons";


class About extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (

            <div className="container" id="about">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center sub-header">About Me</h1>
                    </div>

                    <div className="col-6 col-md-3 text-center">
                        <FontAwesomeIcon icon={faStop} className='fas fa-5x fa-square'/>
                        <div className="row">
                            <div className="col text-center mt-2">
                                <h3>Speed</h3>
                                <div>stuff goes here stuff goes here stuff goes here stuff goes here stuff goes here stuff goes here</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 text-center">
                        <FontAwesomeIcon icon={faStop} className='fas fa-5x fa-square'/>
                        <div className="row">
                            <div className="col text-center mt-2">
                                <h3>Efficiency</h3>
                                <div>stuff goes here stuff goes here stuff goes here stuff goes here stuff goes here stuff goes here</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 text-center">
                        <FontAwesomeIcon icon={faStop} className='fas fa-5x fa-square'/>
                        <div className="row">
                            <div className="col text-center mt-2">
                                <h3>Optimization</h3>
                                <div>stuff goes here stuff goes here stuff goes here stuff goes here stuff goes here stuff goes here</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 text-center">
                        <FontAwesomeIcon icon={faStop} className='fas fa-5x fa-square'/>
                        <div className="row">
                            <div className="col text-center mt-2">
                                <h3>Ingenuity</h3>
                                <div>stuff goes here stuff goes here stuff goes here stuff goes here stuff goes here stuff goes here</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default About;