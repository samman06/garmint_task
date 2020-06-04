import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div className='container-fluid  '>
                <nav className="mb-1 navIBack navbar navbar-expand-lg orange">
                    <Link to={'/'} className="navbar-brand">GarmintIO</Link>
                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to={'/'} className="nav-link">Home</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;
