import { Component, Input, Output } from '@angular/core';
import { Hotel, Room } from 'src/app/model/hotel';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reservations',
  template: `
  <div class="horiz-grid separator"
  *ngFor="let rooms of active?.rooms"
   (click)="addToCart.emit(rooms)">
    <div>{{rooms.label}}</div>
    <div>
      {{rooms.price}}
      <i class="ion-ios-cart"></i>
    </div>
  </div>
  `,
  styles: []
})
export class ReservationsComponent{
  @Input() active : Hotel;
  @Output() addToCart : EventEmitter<Room> = new EventEmitter<Room>();

}
