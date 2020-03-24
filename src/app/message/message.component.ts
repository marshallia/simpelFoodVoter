import { Component, OnInit, Input , Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {
  @Input() id: number;
  @Input() createdAt: Date;
  @Input() titleMessage: string;
  @Input() vote: number;
  @Input() body: string;
  @Input() imageMessage: string[];

  @Output() removed = new EventEmitter<number>();
  @Output() increased = new EventEmitter<number>();
  @Output() decreased = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  remove(id: number) {
      this.removed.emit(id);
  }
  reduceVote(id: number) {
    this.decreased.emit(id);
  }

  increaseVote(id: number) {
    this.increased.emit(id);
  }
}
