import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-principal-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal-buttons.component.html',
  styleUrl: './principal-buttons.component.css'
})
export class PrincipalButtonsComponent {

  @Input() width: string;
  @Input() height: string;
  @Input() color: string;
  @Input() label: string;
  @Output() sendEvent = new EventEmitter<any>();

  constructor() {
    this.width = '';
    this.height = '';
    this.color = 'primary';
    this.label = '';
  }

  emitEventWithArgs(){
    this.sendEvent.emit(this.label);
  }
}
