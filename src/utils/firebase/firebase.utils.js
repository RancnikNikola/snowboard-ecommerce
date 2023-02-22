// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged // observable listener
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt7nwgreTKmeh3T9vUMAapL5cW5uqJwWs",
  authDomain: "snowb-shop-db.firebaseapp.com",
  projectId: "snowb-shop-db",
  storageBucket: "snowb-shop-db.appspot.com",
  messagingSenderId: "91750690643",
  appId: "1:91750690643:web:4822ac44394dec1a4e3ba6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// UDEMY
// class from firebase
const provider = new GoogleAuthProvider();
// always force user to choose an account
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();

// PROVIDERS
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

// instantiate firestore
// singleton instance
export const db = getFirestore(firebaseApp);

// for uploading categories
export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
}

// receives some user auth object
export const createUserDocumentFromAuth = async (userAuth, ...additionalInformation) => {
    if(!userAuth) return;
    // actual instance of doc model
    // 1. db instance
    // 2. collection
    // 3. unique identifier
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    // like data, specific object
    // get doc of userdocref
    // allows us to access the data and check if there is an instance that exists
    const userSnaphot = await getDoc(userDocRef);
    console.log(userSnaphot);

    // if does not exists, true
    if(!userSnaphot.exists()) {
        // destructure from userAtuh
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        // try something async
        // try to set the document and pass it data you want to set
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userSnaphot;
};

// protected frontend app from external service that can change
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

// listener/observer
// whenever you instantiate this func, give me callback
// auth in, auth out
export const onAuthStateChangedListener = (callback) => 
    // open listener, always waiting
    onAuthStateChanged(auth, callback)

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                unsubscribe();
                resolve(userAuth);
            },
            reject
        )
    })
}