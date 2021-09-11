import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-ae',
  templateUrl: './contact-ae.component.html',
  styleUrls: ['./contact-ae.component.scss']
})
export class ContactAeComponent implements OnInit {
  public actionString?: string = "Add";

  constructor(router: Router, activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(params => {
      let id = Number(params["id"]);
      this.actionString = (!!id) ? "Edit" : "Add";
    });
  }

  ngOnInit(): void {
  }

}
