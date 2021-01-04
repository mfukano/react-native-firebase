import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA66A2pHbRwLd8k5zGMyEJ162nIS-Fl9NU',
  authDomain: 'shared-expense-tracker-ac3a0.firebaseapp.com',
  databaseURL: 'https://shared-expense-tracker-ac3a0.firebaseio.com/',
  projectId: 'shared-expense-tracker-ac3a0',
  storageBucket: 'shared-expense-tracker-ac3a0.appspot.com',
  messagingSenderId: '942924115524',
  appId: '1:942924115524:ios:803feb18dad3860e7e9611',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
