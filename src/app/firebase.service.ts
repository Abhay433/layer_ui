import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private db;

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBNOSpZF-_z338IjQRUTOVHhbEnvGSvFbM",
      authDomain: "layerui-102a0.firebaseapp.com",
      projectId: "layerui-102a0",
      storageBucket: "layerui-102a0.firebasestorage.app",
      messagingSenderId: "246328986866",
      appId: "1:246328986866:web:ef6d6ca097a057848c946b",
      measurementId: "G-EVYDSB5B9H"
    };

    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);
  }


  async saveContact(formData: any) {
  try {
    const docRef = await addDoc(
      collection(this.db, 'contact_messages'),
      formData
    );

    return { success: true, id: docRef.id };

  } catch (error) {
    console.error("Error saving data:", error);
    return { success: false, error };
  }
}
}