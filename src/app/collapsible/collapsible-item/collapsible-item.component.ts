import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { generatePrefixedIds } from '../../../utils/utils';

@Component({
  selector: 'app-collapsible-item',
  imports: [CommonModule],
  templateUrl: './collapsible-item.component.html',
})
export class CollapsibleItemComponent {
  isOpen = signal(false);
  panelId = generatePrefixedIds('collapsible');
  panelButtonId = generatePrefixedIds('collapsible-button');
  toggle = () => {
    this.isOpen.update((value) => !value);
  };
}
