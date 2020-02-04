import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//components
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = (props) => {
  
  const { auth, profile } = props;
  //console.log(auth);
  const links = auth.uid ? <SignedInLinks profile = { profile } /> : <SignedOutLinks />;

  return (
    <nav className = "nav-wrapper grey darken-3">
      <div className = "container">
        <Link 
          to = '/' 
          className = "brand-logo"
        >
          MyApp
        </Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  //console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firestore.data.users
  }
}

export default connect(mapStateToProps)(Navbar)