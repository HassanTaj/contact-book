import { ContactsService } from "./../../lib/services/contacts.service";
import { Component, OnInit } from "@angular/core";
import { Contact } from "src/lib/models/contact";

@Component({
	selector: "app-contact-list",
	templateUrl: "./contact-list.component.html",
	styleUrls: ["./contact-list.component.scss"]
})
export class ContactListComponent implements OnInit {
	public contacts: Contact[] = [];

	constructor(private contactService: ContactsService) {}

	ngOnInit(): void {
		this.loadData();
	}

	deleteAll(event: any) {
		debugger;
		this.contactService.deleteAll().subscribe((res: any) => {
			this.loadData();
		});
	}

	deleteRec(e: Contact) {
    this.contactService.delete(e._id).subscribe((res:any)=>{
			this.loadData();
    });
  }

	loadData() {
		this.contactService.get().subscribe((res: any) => {
			this.contacts = res;
		});
	}
}
