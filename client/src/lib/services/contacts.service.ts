import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private ep = 'http://localhost:5000/api/contacts';
  constructor(private http: HttpClient) { }

  public save(obj: Contact) {
    let data = new FormData();
    data.append('model', JSON.stringify(obj));
    if(!!obj.image){
      data.append('image', obj?.image!!)
    }
    console.log(obj.image);
    console.log(data);
    return this.http.post(`${this.ep}`,data);
  }
}
