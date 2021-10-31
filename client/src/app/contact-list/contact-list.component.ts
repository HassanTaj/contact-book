import { ContactsService } from './../../lib/services/contacts.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/lib/models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  public contacts: Contact[] = [];

  constructor(private contactService: ContactsService) { }

  ngOnInit(): void {
    this.loadData();
  }

  deleteAll(event:any) {
    debugger
    this.contactService.deleteAll().subscribe((res:any) => {
      alert('deleted all  records');
      this.loadData();
    });
  }

  loadData() {
    this.contactService.get()
      .subscribe((res: any) => {
        this.contacts = res;
      });
  }

}
