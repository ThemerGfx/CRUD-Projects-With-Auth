import React, { Component } from 'react'

import { connect } from 'react-redux';
import { compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom'
//actions
import { createProject } from '../../store/actions/projectActions'
//components
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'

class Dashboard extends Component {
  render() { 
    // console.log(this.props);
    //const { projects } = this.props;
    const { auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to = '/signin' /> 

    return (
      <div className = "dashboard container">
        <div className = "row">
          <div>
            <ProjectList 
              projectsBase = { this.props.projectsBase }
            />
          </div>
          <div className = "col s12 m5 offset-m1">
            <Notifications 
              notifications = { notifications }
            />
          </div>
        </div>
      </div>
    )
  }
}
 
const mapStateToProps = (state) => {
  return {
    projectsBase: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications 
  }
}

const mapDispatchToProps = (dispatch) => {
 return {
      createProject: (title, content) => dispatch( createProject(title, content) ),
  }
 }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']},
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ]))(Dashboard);
