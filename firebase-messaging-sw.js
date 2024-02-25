importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

const firebaseConfig = {
           apiKey: "AIzaSyD-InaG_BczYqynRn9udZfVEa9OYIeX3Mg",
    authDomain: "shahzad-dee0d.firebaseapp.com",
    databaseURL: "https://shahzad-dee0d-default-rtdb.firebaseio.com",
    projectId: "shahzad-dee0d",
    storageBucket: "shahzad-dee0d.appspot.com",
    messagingSenderId: "725151088109",
    appId: "1:725151088109:web:b52ef3c7f54e92aa073be4",
    measurementId: "G-QQZLVQQ3SQ"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
