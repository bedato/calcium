import { Component } from '@angular/core';
import { HomeContentComponent } from '../../content/home/home-content/home-content.component';

@Component({
  selector: 'app-home',
  imports: [HomeContentComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
