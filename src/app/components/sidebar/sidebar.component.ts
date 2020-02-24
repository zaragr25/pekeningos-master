import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/fos-user', title: 'FOS USER',  icon:'ni-planet text-blue', class: '' },
    { path: '/clientes', title: 'Clientes',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/productos', title: 'Productos',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/boletos', title: 'Boletos',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/ordenes', title: 'Órdenes',  icon:'ni-key-25 text-info', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
