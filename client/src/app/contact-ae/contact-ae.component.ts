import { ContactsService } from './../../lib/services/contacts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/lib/models/contact';

@Component({
    selector: 'app-contact-ae',
    templateUrl: './contact-ae.component.html',
    styleUrls: ['./contact-ae.component.scss']
})
export class ContactAeComponent implements OnInit {
    public actionString?: string = "Add";
    public vm: Contact = new Contact();
    public file?: File;

    constructor(router: Router, activeRoute: ActivatedRoute, private contactService: ContactsService) {
        activeRoute.params.subscribe((params: any) => {
            let id = Number(params["id"]);
            this.actionString = (!!id) ? "Edit" : "Add";
        });
    }

    ngOnInit(): void {
        // if(!this.vm){
        //     this.vm = new Contact();
        // }
    }
    attachFile(event:any) {
        this.vm.image = event.target.files[0];
    }

    save() {
        this.contactService.save(this.vm!!).subscribe((res) => {
            console.log(res);
        });
    }

}
