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
    public base64Url = "";
    public vm: Contact = new Contact();
    public file?: File;
    public loading = false;

    constructor(private router: Router, activeRoute: ActivatedRoute, private contactService: ContactsService) {
        activeRoute.params.subscribe((params: any) => {
            let id = params["id"];
            this.actionString = (!!id) ? "Edit" : "Add";
            this.vm._id =  id;
        });
        this.loading = false;
    }

    ngOnInit(): void {
        if(!!this.vm && !!this.vm?._id){
         this.contactService.get(this.vm._id).subscribe((res:any)=>{
             this.vm = res;
         });
        }
    }

    attachFile(event: any) {
        this.vm.image = event.target.files[0];

        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (evt: any) => {
            this.base64Url = evt.target.result;
        };
    }

    getDataUrl() {

    }

    save() {
        this.loading = true;
        this.contactService.save(this.vm).subscribe((res) => {
           this.loading =  false;
           this.router.navigate(['/contacts']);
        });
    }

}
