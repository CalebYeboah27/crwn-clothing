import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.style.scss'

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser)

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          shop
        </Link>
        <Link to="/contact" className="option">
          contact
        </Link>

        {currentUser ? (
          <>
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
            <img src={currentUser.photoURL} alt={currentUser.displayName} />
          </>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
