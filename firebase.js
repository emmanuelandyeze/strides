// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAzrr3kF0JAdCATSDTk8khlMKGKd6qHBIA',
	authDomain: 'the-strides.firebaseapp.com',
	projectId: 'the-strides',
	storageBucket: 'the-strides.appspot.com',
	messagingSenderId: '669465852828',
	appId: '1:669465852828:web:e5f192306709576efe6659',
	measurementId: 'G-BDL7DQEW4F',
};

// Initialize Firebase
const app = !getApps().length
	? initializeApp(firebaseConfig)
	: getApp();
const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
