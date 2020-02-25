import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Contact } from './contact'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private dbPath = '/contacts';

  contactRef: AngularFireList<Contact> = null;

  constructor(private db: AngularFireDatabase) { 
    this.contactRef = db.list(this.dbPath);
  }

  createContact(contact: Contact): void {
    this.contactRef.push(contact);
  }
}
