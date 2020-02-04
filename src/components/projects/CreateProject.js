import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
//actions
import { createProject } from '../../store/actions/projectActions'


class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    const { title, content } = this.state
    console.log(this.props.auth)
    if(title !== null && content !== null){
        this.props.createProject(title, content)
        this.setState(
            {
              title: '',
              content: ''      
            }
        )
    }
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className  ="container">
        <form className = "white">
          <h5 className = "grey-text text-darken-3"> Create a New Project </h5>
          <div className = "input-field">
            <input 
              type = "text" 
              id = 'title' 
              onChange = { this.handleChange } 
            />
            <label htmlFor = "title" > Project Title </label>
          </div>
          <div className = "input-field" >
            <textarea 
              id="content" 
              className="materialize-textarea" 
              onChange = { this.handleChange }
            />
            <label htmlFor = "content" > Project Content </label>
          </div>
          <div className = "input-field">
            <button 
              className = "btn green lighten-1" 
              onClick = { this.handleSubmit }
            >
              Create
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (title, content) => dispatch( createProject(title, content) )
  }
}

export default connect ( 
  mapStateToProps, 
  mapDispatchToProps 
) ( CreateProject )