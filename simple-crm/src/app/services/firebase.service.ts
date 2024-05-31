import { Injectable, inject } from '@angular/core';
import { Firestore, collection, query, onSnapshot } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);
  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users$: Observable<User[]> = this.usersSubject.asObservable();

  constructor() {
    this.subUsersList();
  }

  subUsersList(): void {
    const q = query(this.getUsersRef());
    onSnapshot(q, (snapshot) => {
      const users: User[] = [];
      snapshot.forEach((doc) => {
        users.push(this.setUserObject(doc.data(), doc.id));
      });
      this.usersSubject.next(users);
    });
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }

  setUserObject(data: any, id: string): User {
    return new User({
      id: id,
      firstName: data?.firstName || '',
      lastName: data?.lastName || '',
      birthDate: data?.birthDate || new Date(),
      street: data?.street || '',
      zipCode: data?.zipCode || 0,
      city: data?.city || ''
    });
  }
}
