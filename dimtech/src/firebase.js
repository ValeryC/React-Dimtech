import firebase from 'firebase/app'
import "firebase/auth"

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// })


const app = firebase.initializeApp({
  apiKey: "AIzaSyDzBuv6zj3rqPKGxcP45iqAjZBSEv4rEM0",
  authDomain: "auth-react-dev-ac91b.firebaseapp.com",
  projectId: "auth-react-dev-ac91b",
  storageBucket: "auth-react-dev-ac91b.appspot.com",
  messagingSenderId: "363074100318",
  appId: "1:363074100318:web:88a2204b22157653cca8cf"
})
export const auth = app.auth()
export default app