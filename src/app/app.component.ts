import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Chat Bots 2.0';

  constructor(
    private _chatService: ChatService
  ) { }

  ngOnInit() {
    this._chatService.userConnectedEvents.subscribe(user => console.log('user connected', user));
    this._chatService.userDisconnectedEvents.subscribe(userId => console.log('user disconnected', userId));
    this._chatService.typingEvents.subscribe(userId => console.log('user is typing', userId));
    this._chatService.messages.subscribe(msg => console.log('new message', msg));
  }
}
