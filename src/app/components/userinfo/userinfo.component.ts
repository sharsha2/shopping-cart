import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  logout() {
    this.authService.logout();
    this.isLogout.emit();
  }
}
