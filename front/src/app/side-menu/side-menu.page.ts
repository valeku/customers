import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit {

  navigate : any

  constructor(private menu: MenuController) { 
    this.sideMenu();
  }

  sideMenu() {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Customers",
        url   : "/customers",
        icon  : "customer"
      },
    ]
  }

  ngOnInit() {

  }


}
