import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact = new Contact();
  submitted = false;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  newContact(): void {
    this.submitted = false;
    this.contact = new Contact();
  }

  save() {
    this.contactService.createContact(this.contact);
    this.contact = new Contact();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
