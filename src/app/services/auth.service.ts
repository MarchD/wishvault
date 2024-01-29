import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}
  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then((r) => {
        // Login successful
      })
      .catch((error) => {
        // An error occurred
      });
  }
}
