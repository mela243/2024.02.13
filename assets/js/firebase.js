// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDs2nUUdghnyj24-47ETagGXgIqTebOFDg",
    authDomain: "fir-tutorial-b8a8a.firebaseapp.com",
    projectId: "fir-tutorial-b8a8a",
    storageBucket: "fir-tutorial-b8a8a.appspot.com",
    messagingSenderId: "904119300339",
    appId: "1:904119300339:web:2c47c0e2457d37990f8786",
    measurementId: "G-P002SX1FYF"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);