import { Component, OnInit } from '@angular/core';
import {Contact} from '../../models/contact';
import {ContactService} from '../../services/contact.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  contacts$: Observable<Contact[]> | undefined;

  ngOnInit(): void {
   this.contacts$ = this.contactService.getContacts();
  }

}
