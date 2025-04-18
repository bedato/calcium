import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-collapsible-item',
  imports: [CommonModule],
  templateUrl: './collapsible-item.component.html',
})
export class CollapsibleItemComponent {
  isOpen = signal(false);

  toggle = () => {
    this.isOpen.update((value) => !value);
  };
}
