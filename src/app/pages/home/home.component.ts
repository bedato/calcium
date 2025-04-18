import { Component } from '@angular/core';
import { NavigationComponent } from '../../layout/navigation/navigation.component';
import { HomeContentComponent } from '../../content/home/home-content/home-content.component';

@Component({
  selector: 'app-home',
  imports: [NavigationComponent, HomeContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
