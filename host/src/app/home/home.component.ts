import { Component, OnInit } from '@angular/core';
import { PluginOptions } from '../plugins/plugin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  plugins: PluginOptions[] = [];

  constructor() { }

  ngOnInit(): void {

    this.plugins = [
      {
        // remoteEntry: 'http://localhost:4700/header.js',
        remoteName: 'header',
        exposedModule: './Header',
        displayName: 'header',
        componentName: 'HeaderComponent'
      },
      {
        // remoteEntry: 'http://localhost:4600/sideNav.js',
        remoteName: 'sideNav',
        exposedModule: './SideNav',
        displayName: 'side-nav',
        componentName: 'SideNavComponent'
      }
    ]

    window.addEventListener('event1', (e: any) => {
      console.log(e, 'eeeeeeeeeeeeeeee');
    })

  }

}
