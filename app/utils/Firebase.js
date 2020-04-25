import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCWNWAKfG_WUjOxld8pMkMhSQB8kWCZoQE",
    authDomain: "tenedores-c8c8f.firebaseapp.com",
    databaseURL: "https://tenedores-c8c8f.firebaseio.com",
    projectId: "tenedores-c8c8f",
    storageBucket: "tenedores-c8c8f.appspot.com",
    messagingSenderId: "353196729287",
    appId: "1:353196729287:web:aadc47e67e010047b6afe2",
    measurementId: "G-6SF478LS29"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);