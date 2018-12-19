import { Injectable } from '@angular/core';
import * as goby from 'goby'

import { User } from '../models/User';
import { ChatMessage } from '../models/ChatMessage';
import { Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';

@Injectable()
export class ChatService {

  userName: string;

  messageEvents: Subject<ChatMessage>;
  typingEvents: Subject<string>;
  conversationSeenEvents: Subject<{ targetId: string, dateSeen: Date }>;
  userConnectedEvents: Subject<User>;
  userDisconnectedEvents: Subject<string>;

  constructor(private webSocketService: WebsocketService) {
    const nameGenerator = goby.init();

    this.userName = nameGenerator.generate(['pre', 'suf']);
    console.log('generated name', this.userName);

    webSocketService.connect(this.userName);

    this.messageEvents = webSocketService.getMessagesSubject();
    this.typingEvents = webSocketService.getTypingEventSubject();
    this.conversationSeenEvents = webSocketService.getConversationSeenEventSubject();
    this.userConnectedEvents = webSocketService.getUserConnectedSubject();
    this.userDisconnectedEvents = webSocketService.getUserDisconnectedSubject();
  }

  sendMessage(content: string, target) {
    const msg = {
      id: null,
      authorId: null,
      targetId: target, 
      authorName: this.userName,
      isIncoming: false,
      dateSent: new Date(),
      dateSeen: null,
      content
    }

    this.messageEvents.next(msg);
    this.webSocketService.emit('message', msg);
  }

  emitTyping(targetId: string) {
    this.webSocketService.emit('typing', targetId);
  }

  emitConversationSeen(targetId: string, time: Date) {
    this.webSocketService.emit('conversation seen', targetId, time);
  }
}
