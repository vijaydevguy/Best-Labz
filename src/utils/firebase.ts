import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkfjlqs-4NSfML4_5noPWfImwpGZbg4PQ",
  authDomain: "bestlabznextjs.firebaseapp.com",
  projectId: "bestlabznextjs",
  storageBucket: "bestlabznextjs.firebasestorage.app",
  messagingSenderId: "673639999163",
  appId: "1:673639999163:web:e67639da118a010492eb9e",
  measurementId: "G-0DQ0YDM22P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  isSupported().then((yes: boolean) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

export { analytics };