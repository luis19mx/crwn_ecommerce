import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

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

const db = getFirestore()
const auth = getAuth()
const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

const createUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  try {
    const userRef = doc(db, 'users', userAuth.uid)
    const user = await getDoc(userRef)
    if (!user.exists()) {
      const { uid: id, displayName, email } = userAuth
      const createdAt = new Date()

      await setDoc(doc(db, 'users', id), {
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    }

    return userRef

    // const cartItems = await getDocs(collection(db, `users/${userAuth.uid}/cartItem`))
    // cartItems.forEach(doc=> console.log(`${doc.id} => ${JSON.stringify(doc.data())}`))
  } catch (error) {
    console.error(error.stack)
    throw error
  }
}

const SignInWithGoogle = async () => {
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

export { createUserDocument, SignInWithGoogle, auth }
