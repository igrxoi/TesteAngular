import { Component, OnInit } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public faBars: any = faBars;
  public faSearch: any = faSearch;
  public faStar: any = faStar;
  public faCommentAlt: any = faCommentAlt;
  public faClipboard: any = faClipboard;
  public faHouse: any = faHouse;

  constructor() { }

  ngOnInit(): void {
  }

}
