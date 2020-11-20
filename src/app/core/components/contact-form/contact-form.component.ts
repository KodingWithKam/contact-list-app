import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import {Contact} from '../../models/contact';
import * as uuid from 'uuid';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

  constructor(private fb: FormBuilder,
              private contactService: ContactService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);
    console.log(this.contactForm.controls.firstName.value);

    const contact: Contact = {
      id: uuid.v4(),
      firstName: this.contactForm.controls.firstName.value,
      lastName: this.contactForm.controls.lastName.value,
      email: this.contactForm.controls.email.value,
      phoneNumber: this.contactForm.controls.phoneNumber.value
    };

    this.contactService.addContact(contact);
  }

}
