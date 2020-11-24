import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA3gmrvRcRDRSAF-xCcbxumX1nkC0muylk",
    authDomain: "crwn-db-50e24.firebaseapp.com",
    databaseURL: "https://crwn-db-50e24.firebaseio.com",
    projectId: "crwn-db-50e24",
    storageBucket: "crwn-db-50e24.appspot.com",
    messagingSenderId: "187647294227",
    appId: "1:187647294227:web:78def52043d3e1cdcfb8e6",
    measurementId: "G-49FRHHC0W7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch {
            console.log('error creating user');
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;