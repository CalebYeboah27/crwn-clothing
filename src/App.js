import React, { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { setCurrentUser } from './redux/features/users/userSlice'

import HomePage from './components/homepage/homepage.component'
import ShopPage from './pages/homepage/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckOutPage from './pages/checkout/checkout.component'

import { auth, creatUserProfileDocument } from './firebase/firebase.utils'

import './App.css'

const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser)

  const dispatch = useDispatch()

  useEffect(() => {
    let unsubcribeFromAuth = null
    unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await creatUserProfileDocument(userAuth)

        userRef.onSnapshot((snapshot) => {
          const data = snapshot.data()
          dispatch(setCurrentUser({ id: snapshot.id, ...data }))
        })
      } else {
        dispatch(setCurrentUser(userAuth))
      }
    })

    return () => unsubcribeFromAuth()
  }, [dispatch])

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckOutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  )
}

export default App
