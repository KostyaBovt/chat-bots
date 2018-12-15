import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/User';
import { ChatMessage } from '../models/ChatMessage';
import { Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';


@Injectable()
export class ChatService {

  messages: Subject<ChatMessage>;
  typingEvents: Subject<any>;
  userConnectedEvents: Subject<User>;
  userDisconnectedEvents: Subject<number>;

  constructor(private webSocketService: WebsocketService) {
    webSocketService.connect();
    this.messages = webSocketService.getMessagesSubject();
    this.typingEvents = webSocketService.getTypingEventSubject();
    this.userConnectedEvents = webSocketService.getUserConnectedSubject();
    this.userDisconnectedEvents = webSocketService.getUserDisconnectedSubject();
  }

  sendMessage(msg: ChatMessage) {
    this.messages.next(msg);
  }

  emitTyping(targetId: number) {
    this.typingEvents.next(targetId);
  }
}
