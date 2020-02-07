import React, {Component} from 'react';
import SignIn from '../Login/login';
import SignUp from '../SignUp/signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './navbar.css'


class NavBar extends Component {
    constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;

    if (isLoggedIn) {
      button =       <ul className="nav navbar-nav navbar-right ml-auto">
                        <li className="nav-item"><a href="#" className="nav-link notifications"><i className="fa fa-bell-o"></i><span className="badge">1</span></a></li>
                        <li className="nav-item"><a href="#" className="nav-link messages"><i className="fa fa-envelope-o"></i><span className="badge">10</span></a></li>
                        <li className="nav-item dropdown">
                            <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle user-action">
                                <img src="img/msd.jfif" className="avatar" alt="Avatar"/>Mani
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="#" className="dropdown-item"><i className="fa fa-user-o"></i> Profile</a></li>
                                <li><a href="#" className="dropdown-item"><i className="fa fa-calendar-o"></i> Calendar</a></li>
                                <li><a href="#" className="dropdown-item"><i className="fa fa-sliders"></i> Settings</a></li>
                                <li className="divider dropdown-divider"></li>
                                <li><a href="#" className="dropdown-item"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
                            </ul>
                        </li>
                     </ul>;
    } else {
            button = <ul className="nav navbar-nav navbar-right ml-auto">
                        <li className="nav-item">
                            <NavLink to="/signin" className="nav-link messages waves-effect" activeClassName='navActive'> <i className="fas fa-sign-in-alt"></i>
                                        Sign In
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/signup" className="nav-link messages waves-effect" activeClassName='navActive'> <i className="fas fa-user-plus"></i>
                                        Sign Up
                            </NavLink>
                        </li>
                     </ul>;
    }
        return (
        <Router>
        <nav className="navbar navbar-default navbar-expand-xl navbar-light">
	        <div className="navbar-header d-flex col">
                <a className="navbar-brand" href="#"><i className="fa fa-cube"></i><b>Digital Solution</b></a>
                <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle navbar-toggler ml-auto">
                    <span className="navbar-toggler-icon"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
		        </button>
	        </div>

            <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">

                <ul className="nav navbar-nav">
                    <li className="nav-item active"><a href="#" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                    <li className="nav-item dropdown">
                        <a data-toggle="dropdown" className="nav-link dropdown-toggle" href="#">Services </a>
                        <ul className="dropdown-menu">
                            <li><a href="#" className="dropdown-item">Data Analytics</a></li>
                            <li><a href="#" className="dropdown-item">Automation</a></li>
                            <li><a href="#" className="dropdown-item">IoT Solutions</a></li>
                            <li><a href="#" className="dropdown-item">Machine Learning</a></li>
                        </ul>
                    </li>
                    <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                </ul>
                <form className="navbar-form form-inline">
                    <div className="input-group search-box">
                        <input type="text" id="search" className="form-control" placeholder="Search here ..."/>
                        <span className="input-group-addon"><i className="material-icons">&#xE8B6;</i></span>
                    </div>
                </form>
                {button}

                </div>
        </nav>
        <Switch>
            <Route exact path="/signin" component={SignIn}></Route>
            <Route exact path="/signup" component={SignUp}></Route>

        </Switch>
        </Router>

        );
    }

}


export default NavBar;