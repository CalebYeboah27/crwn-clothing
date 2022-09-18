import { initializeApp } from 'firebase/app'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBc5w8GH17_v2Q0WbgUrhxQZXGx9pk8Smo',
  authDomain: 'crwn-clothing-9f9eb.firebaseapp.com',
  projectId: 'crwn-clothing-9f9eb',
  storageBucket: 'crwn-clothing-9f9eb.appspot.com',
  messagingSenderId: '196486153306',
  appId: '1:196486153306:web:270ccdd81a8421583ac463',
  measurementId: 'G-26LZ4528FP',
}

// Initialize Firebase
initializeApp(firebaseConfig)

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig)

// Use these for db & auth
export const firestore = firebaseApp.firestore()
export const auth = firebase.auth()

export const creatUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('Error creating user', error.message)
    }
  }

  return userRef
}

const provider = new firebase.auth.GoogleAuthProvider()

// To trigger the google auth popup, whenever we use the provider for authentication
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
