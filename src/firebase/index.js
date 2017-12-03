import firebase from 'firebase';


const config = {
  apiKey: "AIzaSyAbWeCtCYErRgEnUX5hOwZG_rHhIL14HRA",
  authDomain: "strength-archive.firebaseapp.com",
  databaseURL: "https://strength-archive.firebaseio.com",
  projectId: "strength-archive",
  storageBucket: "strength-archive.appspot.com",
  messagingSenderId: "882714645119"
};
firebase.initializeApp(config);

const root = firebase.database().ref();
const routines = firebase.database().ref('routines');

const fb = {
  root,
  routines
}

export { fb };