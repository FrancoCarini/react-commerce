import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAtBHMMaw-PAjMAZ1hLpq5LMTj81TwD7IY",
  authDomain: "react-commerce-84688.firebaseapp.com",
  databaseURL: "https://react-commerce-84688.firebaseio.com",
  projectId: "react-commerce-84688",
  storageBucket: "react-commerce-84688.appspot.com",
  messagingSenderId: "865720933602",
  appId: "1:865720933602:web:6ffed64a02b95e0fe4d2bb"
}

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase