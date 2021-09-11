import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/lib/models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  public contacts: Contact[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
