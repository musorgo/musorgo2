import { auth } from "./firebase.js";

export async function login(email, password) {
  return await auth.signInWithEmailAndPassword(email, password);
}

export async function register(email, password) {
  return await auth.createUserWithEmailAndPassword(email, password);
}

export function getCurrentUser() {
  return auth.currentUser;
}