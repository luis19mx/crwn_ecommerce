// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD6TKbv9MBLAXg3UfhRy9IPT7rBpeCy1h0',
  authDomain: 'crwn-ecommerce-4ac77.firebaseapp.com',
  projectId: 'crwn-ecommerce-4ac77',
  storageBucket: 'crwn-ecommerce-4ac77.appspot.com',
  messagingSenderId: '901354777096',
  appId: '1:901354777096:web:433a42f90d1eada453bfbd',
  measurementId: 'G-93V76TKT2C',
}

initializeApp(firebaseConfig)
const auth = getAuth()
const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const SignInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    const credential = GoogleAuthProvider.credentialFromResult(result)
    const token = credential.accessToken
    const user = result.user
    // console.log(result)
    // console.log(credential)
    // console.log(token)
    // console.log(user)
  } catch (error) {
    // const errorCode = error.code
    // const errorMessage = error.message
    // const email = error.email
    const credential = GoogleAuthProvider.credentialFromError(error)
    console.error(credential)
    throw error
  }
}

// export const auth = firebase.auth()
// export const firestore = firebase.firestore()

// const provider = new firebase.auth.GoogleAuthProvider()
// provider.setCustomParameters({ prompt: 'select_account' })
// export const SignInWithGoogle = () => auth.SignInWithGoogle(provider)

// export default firebase
