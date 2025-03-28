import { FirebaseError } from "firebase/app";
import { auth } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, UserCredential } from "firebase/auth";

export const signIn = async (email: string, password: string): Promise<UserCredential | string> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in:", userCredential.user);
    return userCredential;
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.error("Error signing in:", error.message);
      return error.code;
    }
    console.error("Unknown error signing in:", error);
    return "unknown_error";
  }
};

export const signUp = async (email: string, password: string): Promise<UserCredential | string> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up:", userCredential.user);
    return userCredential;
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.error("Error signing up:", error.message);
      return error.code;
    }
    console.error("Unknown error signing up:", error);
    return "unknown_error";
  }
};