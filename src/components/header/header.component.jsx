import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.style.scss'

const Header = () => {
  const {
    user: { currentUser },
    cart: {
      cart: { hidden },
    },
  } = useSelector((state) => state)

  // console.log(cart.cart.hidden)

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
          <div className="sign-out">
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
            <CartIcon />
            {currentUser.photoURL && (
              <img
                src={currentUser.photoURL}
                alt={currentUser.displayName}
                className="image"
              />
            )}
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  )
}

export default Header
