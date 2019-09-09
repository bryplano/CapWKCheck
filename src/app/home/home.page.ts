import { Component, OnInit } from '@angular/core';
import { BrowserView } from '@sethlilly/capacitor-browser-view';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log('On init, using BrowserView');
    BrowserView.open({url: 'https://google.com' });
  }

}
