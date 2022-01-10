import { Component, OnInit } from '@angular/core';
import { SlidebarService } from '../../services/slidebar.service';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styles: [
  ]
})
export class SlidebarComponent implements OnInit {
  menuItems:any[];
  constructor(private SlidebarService: SlidebarService) { 
    this.menuItems = SlidebarService.menu;
  }

  ngOnInit(): void {
  }

}
