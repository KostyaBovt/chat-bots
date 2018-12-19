import { Component, Input, AfterViewInit } from '@angular/core';
import { ChatMessage } from '../models/ChatMessage';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements AfterViewInit {

  @Input() msg: ChatMessage;

  constructor() { }

  ngAfterViewInit() {
    const container = document.getElementById("message-list");           
    container.scrollTop = container.scrollHeight;
  }

}
