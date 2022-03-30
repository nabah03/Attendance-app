 import  firebase from "firebase";

var  firebaseConfig = {
  apiKey: "AIzaSyCvwtG9Cw7gnKHQUxoCHQAGMwCQPVx-FqE",
  authDomain: "attendance-17b1d.firebaseapp.com",
  databaseURL: "https://attendance-17b1d-default-rtdb.firebaseio.com",
  projectId: "attendance-17b1d",
  storageBucket: "attendance-17b1d.appspot.com",
  messagingSenderId: "45869556680",
  appId: "1:45869556680:web:ddaa171fb8ed33ba25d6fd"
}; 
if (!firebase.apps.length)
{firebase.initializeApp(firebaseConfig)}
  export default firebase.database()
 

  