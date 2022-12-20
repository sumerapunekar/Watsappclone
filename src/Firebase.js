// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBChS7zeWxphplIP8QUjCdkB4FXXpdKqtU",
  authDomain: "watsapp-clone-ee814.firebaseapp.com",
  projectId: "watsapp-clone-ee814",
  storageBucket: "watsapp-clone-ee814.appspot.com",
  messagingSenderId: "780501144483",
  appId: "1:780501144483:web:52bd03bafef3c469198016",
  measurementId: "G-KC2RC57KYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;