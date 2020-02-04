import React from 'react'

import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
//actions
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {

  return (
    <div>
      <ul className="right">
        <li>
          <NavLink 
            to = '/create'  
            className = "btn white lighten-1"
          > 
              New Project 
          </NavLink>
        </li>
        <li>
          <NavLink 
            to = '/update' 
            className = "btn white lighten-1" 
          > 
            Update & Delete Project 
          </NavLink>
        </li>
        <li>
          <a 
            onClick = { props.signOut } 
            className = "btn black lighten-1" 
          > 
            Log Out 
          </a>
        </li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect ( null, mapDispatchToProps ) ( SignedInLinks );