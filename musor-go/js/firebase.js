const firebaseConfig = {
  apiKey: "AIzaSyAfNIlVyq0mdYylfR__zp1bg2uO7xapvoQ",
  authDomain: "musor-go.firebaseapp.com",
  projectId: "musor-go",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();