import firebase from "firebase";
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAb9xG6T1TAxGWpciZXlKIJLyCHpP8Jg7M",
    authDomain: "proyecto-react-david.firebaseapp.com",
    projectId: "proyecto-react-david",
    storageBucket: "proyecto-react-david.appspot.com",
    messagingSenderId: "583015855746",
    appId: "1:583015855746:web:c085f0043cd1402465269b"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export function getFirestore (){
      return firebase.firestore(app)
  }