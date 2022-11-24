import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAQpAlw1fdzEdkmFl2TV-strQsz7kpuBfM",
    authDomain: "fir-e1150.firebaseapp.com",
    projectId: "fir-e1150",
    storageBucket: "fir-e1150.appspot.com",
    messagingSenderId: "115563906174",
    appId: "1:115563906174:web:50a30cc94b60b04a87c42f",
    measurementId: "G-N4YLFHRS42"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db,auth};