import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PluginOptions } from '../plugins/plugin';

declare var $: any;

@Component({
  selector: 'app-feature3',
  templateUrl: './feature3.component.html',
  styleUrls: ['./feature3.component.scss']
})



export class Feature3Component implements OnInit {
  selectedUser: any;
  plugins: PluginOptions[] = [];
  display: boolean = false;

  showDialog() {
      this.display = true;
  }

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router
  ) { }

  openModal() {
    $('#exampleModal').modal('show');
  }

  ngOnInit(): void {

    const sub = this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      let det: any = params.get('user');
      this.selectedUser = JSON.parse(atob(det));
      console.log(this.selectedUser, 'user')
    });

    this.plugins = [
      {
        remoteEntry: 'http://localhost:4800/remoteModelEntry.js',
        remoteName: 'models',
        exposedModule: './Models',
        displayName: 'Model',
        componentName: 'ModelComponent'
      },
    ]

    this.genarateTransaction();
  }

  genarateTransaction() {
    this.selectedUser.transactionId = Math.random().toString().substr(2, 15);

  }

}
