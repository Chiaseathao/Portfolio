import React, { Component } from 'react';
import bgVideo3 from './videos/bgVideo3.mp4';
import { Link } from 'react-scroll'

class Header extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (

            <div className="container vertical-height" id="header">
                {/*<video autoPlay loop muted*/}
                {/*       style={{*/}
                {/*           position: "absolute",*/}
                {/*           width: '100%',*/}
                {/*           left: '50%',*/}
                {/*           top: '50%,',*/}
                {/*           height: '200%',*/}
                {/*           objectFit: 'cover',*/}
                {/*           transform: 'translate(-50%, -50%)',*/}
                {/*           zIndex: '-1'*/}
                {/*       }}>*/}
                {/*    <source src={bgVideo3} type="video/mp4"/>*/}
                {/*</video>*/}
                <div className="row">
                    <div className="col-12 header-1 text-center">
                        Hello, I am
                    </div>

                    <div className="col-12 text-center">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-55}
                            duration={500}
                        >
                            <a className="header-2 link-hover" href="#about">
                            Chiasea Thao,
                            </a>
                        </Link>
                    </div>

                    <div className="col-12 header-3 text-center">
                        a front-end developer.
                    </div>
                    {/*give flashing effect*/}
                </div>
            </div>

        );
    }
}

export default Header;