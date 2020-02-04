import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//components
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import CreateProject from './components/projects/CreateProject'
import  UpdateProject  from './components/projects/UpdateProject';
import  SignIn  from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path = '/' component = { Dashboard } />
            <Route path = '/project/:id' component = { ProjectDetails } />
            <Route path = '/create' component = { CreateProject } />
            <Route path = '/update' component = { UpdateProject } />
            <Route path = '/signin' component = { SignIn } />
            <Route path = '/signup' component = { SignUp } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;