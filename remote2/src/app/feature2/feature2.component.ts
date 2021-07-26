import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.scss']
})
export class Feature2Component implements OnInit {
  selectedUser: any;
  @ViewChild('overlay')
  overlay!: ElementRef<HTMLInputElement>;
  expression: string = 'none';

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {

    const sub = this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      let det: any = params.get('user');
      this.selectedUser = JSON.parse(atob(det));
      console.log(this.selectedUser, 'user');
    });

  }

  pauseScreen() {
    console.log('hello');

  }

  cancel() {
    this._router.navigate(['/home/feature1'])
  }

  makePayment() {
    this.overlay.nativeElement.click();
    this.expression = 'block';

    setTimeout(() => {
      this.expression = 'none';
      this.selectedUser.token = new Date();
      this._router.navigate([`/home/feature3/${btoa(JSON.stringify(this.selectedUser))}`])
    }, 3000);
  }



}
