import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iif } from 'rxjs';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.scss']
})
export class Feature1Component implements OnInit {
  firstName: String = '';
  lastName: String = '';
  age: any;
  plan: String = '';
  form_valid: boolean = true;
  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {

    const obj = {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      plan: this.plan
    }

    console.log(obj, 'userForm');
    if (obj.firstName && obj.lastName && obj.age && obj.plan) {
      this._router.navigate([`/home/feature2/${btoa(JSON.stringify(obj))}`])
    } else{
      this.form_valid = false;
    }

    // window.dispatchEvent(new CustomEvent('event1', { detail: { key: this.userForm.firstName } }));


  }

}
