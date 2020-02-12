  import firebase from 'firebase/app'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBgy95-5J50y91OvsxVfLc6kjkw_n7jOQk",
    authDomain: "local-todo-list.firebaseapp.com",
    databaseURL: "https://local-todo-list.firebaseio.com",
    projectId: "local-todo-list",
    storageBucket: "local-todo-list.appspot.com",
    messagingSenderId: "144170299514",
    appId: "1:144170299514:web:099a7c08a3e861d9080bc3",
    measurementId: "G-9R39NLBZS7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;