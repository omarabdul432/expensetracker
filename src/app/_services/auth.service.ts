import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private firebase: Auth) { }

  register(username: string, email: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebase,
      email,
      password
    ).then(res => updateProfile(res.user, { displayName: username }));
    return from(promise);
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(this.firebase, email, password).then(() => { })
    return from(promise)
  }
}
