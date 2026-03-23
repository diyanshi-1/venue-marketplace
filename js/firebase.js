// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpN7lJSSzb-tCH28V3mKBXnTg-k4IKRZc",
  authDomain: "venuehub-4e1cf.firebaseapp.com",
  projectId: "venuehub-4e1cf",
  storageBucket: "venuehub-4e1cf.firebasestorage.app",
  messagingSenderId: "212934251407",
  appId: "1:212934251407:web:dc96fa168cf7821e09f1fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);