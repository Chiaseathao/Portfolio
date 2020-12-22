import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (

            <div className="container vertical-height" id="header">
                <div className="row">
                    <div className="col-12 header-1 text-center">
                        Hello, I am
                    </div>
                    <a className="col-12 header-2 text-center" href="#about">
                        Chiasea Thao,
                    </a>
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