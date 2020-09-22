import firebase from 'firebase/app';
import apiKeys from '../apiKeys.json';
import 'firebase/storage';

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(apiKeys.firebaseConfig);
  }
};

export default firebaseApp;
