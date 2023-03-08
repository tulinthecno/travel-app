   // Import the functions you need from the SDKs you need
   import { initializeApp } from "firebase/app";
   import { getAnalytics } from "firebase/analytics";
   import {getFirestore} from 'firebase/firestore'
   import {getAuth} from 'firebase/auth'
   import {getStorage} from 'firebase/storage'
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries
   
   // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   const firebaseConfig = {
    //    apiKey: "AIzaSyA764C7WdnjFOiwfh9q9nqstrCqA08gvfU",
    //    authDomain: "social-c7db0.firebaseapp.com",
    //    projectId: "social-c7db0",
    //    storageBucket: "social-c7db0.appspot.com",
    //    messagingSenderId: "782857857583",
    //    appId: "1:782857857583:web:e080621d0ffb1776d6b4da",
    //    measurementId: "G-B2S28WESDV"


    apiKey: "AIzaSyDo_t3QkO5AW9xWfVaeuGq1EhC1B8CLqeQ",
    authDomain: "travel-project-4e2c3.firebaseapp.com",
    projectId: "travel-project-4e2c3",
    storageBucket: "travel-project-4e2c3.appspot.com",
    messagingSenderId: "882760337131",
    appId: "1:882760337131:web:6223baf20f2b91f6fea0ae",
    measurementId: "G-FBR2YTJPVX"
  



   };
   
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   // const analytics = getAnalytics(app);
   export const db = getFirestore(app)
   export const auth = getAuth(app)
   export const storage = getStorage(app)
   