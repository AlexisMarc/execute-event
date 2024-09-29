import { Component, OnInit } from '@angular/core';
import { pgCardSocial } from '../../@pages/components/card-social/card-social.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [pgCardSocial]
})
export class CasualDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
