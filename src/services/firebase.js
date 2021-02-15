import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
const config = {
  apiKey: "AIzaSyD0r_4OlEFv8MKXzZtOcp0_FSalyWxvk8c",
  authDomain: "vamsi-digital-jalebi-notes.firebaseapp.com",
  projectId: "vamsi-digital-jalebi-notes",
  storageBucket: "vamsi-digital-jalebi-notes.appspot.com",
  messagingSenderId: "1031588269195",
  appId: "1:1031588269195:web:8e44df325bd28c1b3c988e",
  measurementId: "G-Z72WY769T3",
};
app.initializeApp(config);

const firebaseDb = app.firestore();

export default app;

export async function addUser(email, password) {
  try {
    let userData = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await firebaseDb.collection("users").doc(userData.user.uid).set({
      email,
      password,
      createdAt: app.firestore.FieldValue.serverTimestamp(),
    });
  } catch (error) {
    alert(error.message);
  }
}
export async function logoutUser() {
  try {
    await app.auth().signOut();
  } catch (err) {
    alert(err.message);
  }
}
export async function loginUser(email, password) {
  try {
    await app.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    alert(error.message);
  }
}

export async function addNote(noteData) {
  const res = await firebaseDb.collection("notes").add({
    ...noteData,
    createdAt: app.firestore.FieldValue.serverTimestamp(),
  });
  return res.id;
}
export async function getUserNotes(id) {
  let data = [];
  let userdata = await firebaseDb
    .collection("notes")
    .where("userId", "==", id)
    .orderBy("createdAt", "desc")
    .get();
  userdata.forEach((doc) => {
    data = [
      ...data,
      {
        id: doc.id,
        text: doc.data().text,
        userId: doc.data().userId,
      },
    ];
  });
  return data;
}
export async function getNote(id) {
  let data;
  let doc = await firebaseDb.collection("notes").doc(id).get();
  data = {
    id: doc.id,
    text: doc.data().text,
    userId: doc.data().userId,
  };
  return data;
}

export async function deleteNote(id) {
  await firebaseDb.collection("notes").doc(id).delete();
}
