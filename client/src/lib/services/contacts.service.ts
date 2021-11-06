import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private ep = 'http://localhost:5001/api/contacts';
  constructor(private http: HttpClient) { }

  public get(id?: string) {
    return this.http.get(`${this.ep}${(!!id) ? `/${id}` : ''}`);
  }

  public delete(id?: string) {
    return this.http.delete(`${this.ep}/${id}`);
  }
  public deleteAll() {
    return this.http.delete(`${this.ep}/deleteAll`);
  }

  public save(obj?: Contact) {
    let data = new FormData();
    data.append('model', JSON.stringify(obj));
    if (!!obj?.image) {
      data.append('image', obj?.image!!)
    }
    // console.log(obj.image);
    // console.log(data);
    let request = this.http.post(`${this.ep}`, data);
    if (!!obj?._id) {
      request = this.http.put(`${this.ep}${(!!obj._id) ? `/${obj._id}` : ''}`, data);
    }
    return request;
  }

}
