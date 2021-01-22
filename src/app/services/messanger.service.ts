import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessangerService {
 subject = new Subject();
  constructor() { }

  // tslint:disable-next-line:typedef
  sendMsg(product) {
    this.subject.next(product); // Triggering an event
  }

  // tslint:disable-next-line:typedef
  getMsg() {
    return this.subject.asObservable();
  }
}
