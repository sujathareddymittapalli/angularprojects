import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private content = new BehaviorSubject({
    "title": "himalaya",
    "year": "2013",
    "poster": "pure",
    "id": 1
  });
   share = this.content.asObservable();
  constructor() { }
  updateData(text) {
    this.content.next(text);
  }
}
