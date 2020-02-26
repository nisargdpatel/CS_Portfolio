import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  

  contact: Contact = new Contact();
  submitted = false;
  error =  false;

  constructor(private contactService: ContactService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      message: ['']
    });
  }

  get f() { return this.contactForm.controls; }

  newContact(): void {
    this.submitted = false;
    this.contact = new Contact();
  }

  save() {
    if (this.contact.name != '' && this.contact.email != '' && this.contact.phone != null)
    {
      this.contactService.createContact(this.contact);
      this.contact = new Contact();
    }
  }

  onSubmit() {
    
    

    if (this.contact.name != '' && this.contact.email != '' && this.contact.phone != null)
    {
      this.submitted = true;
      this.save();
      alert('SUCCESS! \n\n' + JSON.stringify(this.contactForm.value, null, 4));
    } else {
      this.error = true;
    }
    
  }

  onReset() {
    this.submitted = false;
    this.contactForm.reset();
    this.error = false;
  }

}
