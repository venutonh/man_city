import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';


const config = {
    apiKey: "AIzaSyDktw3RBuBXNVkxMV94LsGDD7injwEHIJY",
    authDomain: "m-city-3efd6.firebaseapp.com",
    databaseURL: "https://m-city-3efd6.firebaseio.com",
    projectId: "m-city-3efd6",
    storageBucket: "",
    messagingSenderId: "321265568047",
    appId: "1:321265568047:web:77f80ff68f0881f35c79da",
    measurementId: "G-NX7BRSMEJ9"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches =firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');

export {
    firebase,
    firebaseMatches,
    firebasePromotions
}