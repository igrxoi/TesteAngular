import { Component, OnInit } from '@angular/core';

import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public faBell: any = faBell;
  public faBars: any = faBars;
  public faSearch: any = faSearch;
  public faStar: any = faStar;
  public faCommentAlt: any = faCommentAlt;
  public faClipboard: any = faClipboard;
  public faHouse: any = faHouse;
  public faXmark: any = faXmark;
  public showMenu: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  openMenu(): void {
    this.showMenu = this.showMenu ? false : true;
  }

}
