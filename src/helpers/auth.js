import { auth } from "../services/firebase";

export function signUp(email, password) {
  return auth().createUserWithEmailAndPassword(email.trim(), password);
}

export function signIn(email, password) {
  return auth().signInWithEmailAndPassword(email.trim(), password);
}

export function signInWithGoogle() {
  const provider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider);
}

export function logout() {
  return auth().signOut();
}