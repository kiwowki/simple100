import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBh17KWUHim71xlJM282F5Sl5jzmTsll5s",
    authDomain: "simple-blog100.firebaseapp.com",
    projectId: "simple-blog100",
    storageBucket: "simple-blog100.appspot.com",
    messagingSenderId: "683949324690",
    appId: "1:683949324690:web:a4e5fa3d450df353f0694b",
};


firebase.initializeApp(firebaseConfig)

export default firebase;