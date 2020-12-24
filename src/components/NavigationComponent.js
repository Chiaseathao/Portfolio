import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink} from "reactstrap";
import {Link} from "react-scroll";
// import { NavLink } from "react-router-dom"

class Navigation extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);

        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({isNavOpen: !this.state.isNavOpen});
    }

    render() {
        return (
            <div>
                <Navbar expand='md' dark>
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                        <Link
                                            activeClass="active"
                                            to="header"
                                            spy={true}
                                            smooth={true}
                                            offset={-55}
                                            duration={500}
                                        >
                                            <a className="nav-link raleway-medium" href="#header">
                                                Home
                                            </a>
                                        </Link>
                                </NavItem>

                                <NavItem>
                                    <a className="nav-link raleway-medium" href="#about">
                                        About
                                    </a>
                                </NavItem>

                                <NavItem>
                                    <a className="nav-link raleway-medium" href="#portfolio">
                                        Portfolio
                                    </a>
                                </NavItem>

                                <NavItem>
                                    <a className="nav-link raleway-medium" href="#contact">
                                        Contact
                                    </a>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>

        );
    }
}

export default Navigation;