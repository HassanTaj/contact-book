"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactAeComponent = void 0;
var core_1 = require("@angular/core");
var contact_1 = require("src/lib/models/contact");
var ContactAeComponent = /** @class */ (function () {
    function ContactAeComponent(router, activeRoute, contactService) {
        var _this = this;
        this.contactService = contactService;
        this.actionString = "Add";
        this.vm = new contact_1.Contact();
        activeRoute.params.subscribe(function (params) {
            var id = Number(params["id"]);
            _this.actionString = (!!id) ? "Edit" : "Add";
        });
    }
    ContactAeComponent.prototype.ngOnInit = function () {
        // if(!this.vm){
        //     this.vm = new Contact();
        // }
    };
    ContactAeComponent.prototype.attachFile = function (event) {
        this.vm.image = event.target.files[0];
    };
    ContactAeComponent.prototype.save = function () {
        this.contactService.save(this.vm).subscribe(function (res) {
            console.log(res);
        });
    };
    ContactAeComponent = __decorate([
        core_1.Component({
            selector: 'app-contact-ae',
            templateUrl: './contact-ae.component.html',
            styleUrls: ['./contact-ae.component.scss']
        })
    ], ContactAeComponent);
    return ContactAeComponent;
}());
exports.ContactAeComponent = ContactAeComponent;
