import React, {Component} from 'react';
import './App.css';
//import Home from './components/HomePage/home'
import NavBar from './components/NavBar/navbar'
import LogIn from './components/Login/login'
import SignUp from './components/SignUp/signup'

class App extends Component{
    render(){
        return(
        <div className="App">
            <NavBar />
        </div>
        )
    }
}


export default App;
