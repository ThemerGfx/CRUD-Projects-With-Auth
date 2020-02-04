import React from 'react'

import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className = "right">
        <li>
          <NavLink 
            to = '/signup' 
            className = "btn blue lighten-1"
          > 
            Signup 
          </NavLink>
        </li>
        <li>
          <NavLink 
            to = '/signin' 
            className = "btn yellow lighten-1"
          > 
            Login 
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default SignedOutLinks