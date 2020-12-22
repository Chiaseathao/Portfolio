import React, {Component} from 'react';
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="text-center">
                                <a className="btn" href="http://www.facebook.com/profile.php?id="><FontAwesomeIcon className="fa-2x" icon={faFacebook}></FontAwesomeIcon></a>
                                <a className="btn" href="http://www.linkedin.com/in/"><FontAwesomeIcon className="fa-2x" icon={faLinkedinIn}></FontAwesomeIcon></a>
                                <a className="btn" href="http://www.github.com"><FontAwesomeIcon className="fa-2x" icon={faGithub}></FontAwesomeIcon></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;