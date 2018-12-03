import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AmCharts from "@amcharts/amcharts3-react";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';



// let config = {
//     apiKey: "AIzaSyBI-CY6FcGiByKW9J0sySmg206L6lREw0E",
//     authDomain: "final-project-stage-4.firebaseapp.com",
//     databaseURL: "https://final-project-stage-4.firebaseio.com",
//     projectId: "final-project-stage-4",
//     storageBucket: "final-project-stage-4.appspot.com",
//     messagingSenderId: "126223027087"
//   };
// firebase.initializeApp(config);

// firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((userCredentials) => {
//         let user = userCredentials.user; //access the newly created user
//         console.log('User created: '+user.uid);
//         //...
//     })
//     .catch((error) => { //report any errors
//         console.log(error.message);
//     });


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


