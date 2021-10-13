"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactsService = void 0;
var core_1 = require("@angular/core");
var ContactsService = /** @class */ (function () {
    function ContactsService(http) {
        this.http = http;
        this.ep = 'http://localhost:5000/api/contacts';
    }
    ContactsService.prototype.save = function (obj) {
        var data = new FormData();
        data.append('model', JSON.stringify(obj));
        if (!!obj.image) {
            data.append('image', obj === null || obj === void 0 ? void 0 : obj.image);
        }
        console.log(obj.image);
        console.log(data);
        return this.http.post("" + this.ep, data);
    };
    ContactsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ContactsService);
    return ContactsService;
}());
exports.ContactsService = ContactsService;
