import {BrowserRouter as Router} from "react-router-dom";

import Form from "./components/State/Form";
import {Component} from "react";
import Profile from "./components/State/Profile";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {email: 'Anonym'}
        this.handleEmail = this.updateEmail.bind(this)
    }

    updateEmail(email){
        this.setState({email: email})
    }

   render() {
       return (
           <Router>
               <Form
                   email={this.state.email}
                   handleEmail={this.handleEmail}
               />
               <Profile email={this.state.email}/>
           </Router>
       );
   }
}

