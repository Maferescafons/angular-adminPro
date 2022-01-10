import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SlidebarComponent,
    HeaderComponent,
  ],
  exports:[
    BreadcrumbsComponent,
    SlidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
