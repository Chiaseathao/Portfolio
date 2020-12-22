import React, { Component } from 'react';
import Header from "./HeaderComponent";
import Navigation from "./NavigationComponent";
import About from "./AboutComponent";
import Portfolio from "./PortfolioComponent";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent"




class Main extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Header />
                <Navigation />
                <About />
                <Portfolio />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Main;