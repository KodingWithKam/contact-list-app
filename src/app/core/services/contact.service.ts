import { Injectable } from '@angular/core';
import {Contact} from '../models/contact';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  private contactList: Contact[] = [
    {
      id: '1',
      firstName: 'Test1',
      lastName: 'TestLast1',
      email: 'test@test.com',
      phoneNumber: '4040404040'
    },
    {
      id: '2',
      firstName: 'Test2',
      lastName: 'TestLast2',
      email: 'test2@test.com',
      phoneNumber: '12345667'
    },
    {
      id: '3',
      firstName: 'Test3',
      lastName: 'TestLast3',
      email: 'tes3@test.com',
      phoneNumber: '434343434354'
    }
  ];

  getContacts(): Observable<Contact[]> {
    console.log('here');
    return of(this.contactList);
  }

  addContact(contact: Contact): boolean {
    this.contactList.push(contact);
    return true;
  }
}
