import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feature3',
  templateUrl: './feature3.component.html',
  styleUrls: ['./feature3.component.scss']
})
export class Feature3Component implements OnInit {
  selectedUser: any;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {

    const sub = this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      let det: any = params.get('user');
      this.selectedUser = JSON.parse(atob(det));
      console.log(this.selectedUser, 'user')
    });

    this.genarateTransaction();
  }

  genarateTransaction(){
    this.selectedUser.transactionId = Math.random().toString().substr(2,15);
    
  }

}
