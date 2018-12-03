import firebase from 'firebase';

const config ={
    apiKey: "AIzaSyBI8BNT5Zk6KVMC6gf_lWJji6fEnzCE8pY",
    authDomain: "loginapp-48727.firebaseapp.com",
    databaseURL: "https://loginapp-48727.firebaseio.com",
    projectId: "loginapp-48727",
    storageBucket: "loginapp-48727.appspot.com",
    messagingSenderId: "621082047220"
};

// firebase.initializeApp(config);
const fire = firebase.initializeApp(config);
export default fire; 