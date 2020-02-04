import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
//actions
import { updateProject, deleteProject } from '../../store/actions/projectActions'
//components
import ProjectListUpdated from '../projects/ProjectListUpdated'

class UpdateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title:"",
        content:"",
        id: ""     
    };
 }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleUpdate = (id, title, content) => {
    this.setState (
        {
            id: id,
            title: title,
            content: content
        }
    )
  }
  handleUpdate2 = (event) => {
    event.preventDefault()
    const { id, title, content } = this.state
    if(title !== null && content !== null){
        this.props.updateProject(id, title, content)
        this.setState(
            {
                title:"",
                content:"",
                id: ""         
            }
        )
    }   
  }
  render() {
    return (
      <div className = "container">
        <form className = "white">
          <h5 className = "grey-text text-darken-3"> Update a Project </h5>
          <div>
            <input 
              type = "text" 
              id = 'title' 
              onChange = { this.handleChange } 
              value = { this.state.title }
            />
            <label htmlFor = "title"> Project Title </label>
          </div>
          <div>
            <textarea 
              id = "content" 
              className = "materialize-textarea" 
              onChange = { this.handleChange } 
              value = { this.state.content }
            />
            <label htmlFor = "content"> Project Content </label>
          </div>
          <div className = "input-field">
            <button 
              className = "btn pink lighten-1" 
              onClick = { this.handleUpdate2 }
            >
              Update
            </button>
            <button>
            <Link 
          to = '/' 
          className = "btn grey lighten-1"
        >
          Retour
        </Link>
            </button>
          </div>
        </form>
        <div className = "col s12 m6">
            <ProjectListUpdated 
                          projectsBase = { this.props.projectsBase }
                          handleUpdate = { this.handleUpdate }
                          deleteProject = { this.props.deleteProject }
            />
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projectReducer.projects,
    projectsBase: state.firestore.ordered.projects 
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    updateProject: (id, title, content) => dispatch(updateProject(id, title, content)),
    deleteProject: (id) => dispatch(deleteProject(id))
  }
}

export default compose (
  connect ( mapStateToProps, mapDispatchToProps ),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']}
  ]))(UpdateProject);