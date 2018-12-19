import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Conversation } from '../models/Conversation';
import { ChatService } from './chat.service';
import { WebsocketService } from './websocket.service';
import { ChatMessage } from '../models/ChatMessage';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ConversationService {

  private _conversations: Conversation[] = [];

  private mainConversationsSubject = new BehaviorSubject<Conversation[]>(null);
  private onlineConversationsSubject = new BehaviorSubject<Conversation[]>(null);
  private searchResults = new BehaviorSubject<Conversation[]>(null);
  private selectedConversationSubject = new BehaviorSubject<Conversation>(null);

  constructor(
    private chatService: ChatService,
    private webSocketService: WebsocketService
  ) {

    this.webSocketService.getUsers().subscribe(users => {
      this._conversations = users.map(user => ({ user, messages: [] }));
      this.mainConversationsSubject.next(this._conversations);
    });

    this.chatService.userConnectedEvents.subscribe(user => {
      this._conversations.unshift({ user, messages: [] });
      this.mainConversationsSubject.next(this._conversations);
    });

    this.chatService.userDisconnectedEvents.subscribe(userId => {
      const conversation = this._conversations.find(conv => conv.user.id === userId);
      conversation.user.isOnline = false;
      this.mainConversationsSubject.next(this._conversations);
    });

    this.chatService.messageEvents.subscribe(message => {
      const { authorId, targetId } = message;

      const convIndex = this._conversations.findIndex(conv =>
        (conv.user.id === authorId || conv.user.id === targetId));

      this._conversations[convIndex].messages.push(message);

      if (convIndex > 0) {
        const targetConv = this._conversations.splice(convIndex, 1)[0];
        this._conversations.unshift(targetConv);
      }

      this.mainConversationsSubject.next(this._conversations);
    });

    this.chatService.conversationSeenEvents.subscribe(data => {
      const { targetId, dateSeen } = data;

      const targetConv = this._conversations.find(conv => conv.user.id === targetId);
      const lastOutMessage = this.getLastOutMessageFrom(targetConv);

      if (lastOutMessage) {
        lastOutMessage.dateSeen = dateSeen;
        this.mainConversationsSubject.next(this._conversations);
      }
    })

    this.mainConversationsSubject.subscribe(conversations => {
      if (conversations) {
        const onlineConv = conversations.filter(conv => conv.user.isOnline);
        this.onlineConversationsSubject.next(onlineConv);
      }
    });

  }

  private trigerSearch(name: string): void {
    console.log('searching for', name);
    const pattern = new RegExp(name, 'i');
    const result = this._conversations.filter(conv => conv.user.name.match(pattern));
    this.searchResults.next(result);
  }

  searchConversations(name: Observable<string>) {
    name
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(name => this.trigerSearch(name));
  }

  getConversations(): BehaviorSubject<Conversation[]> {
    return this.mainConversationsSubject;
  }

  getOnlineConversations(): BehaviorSubject<Conversation[]> {
    return this.onlineConversationsSubject;
  }

  getSelectedConversation(): BehaviorSubject<Conversation> {
    return this.selectedConversationSubject;
  }

  getSearchResults(): BehaviorSubject<Conversation[]> {
    return this.searchResults;
  }

  selectConversation(conversation: Conversation) {
    const { value: selectedConv } = this.selectedConversationSubject;
    if (selectedConv === null || conversation.user.id !== selectedConv.user.id) {
      this.setConversationAsSeen(conversation);
      this.selectedConversationSubject.next(conversation);
    }
  }

  setConversationAsSeen(conversation: Conversation) {
    const targetConv = this._conversations.find(conv => conv.user.id === conversation.user.id);
    const lastInMessage = this.getLastInMessageFrom(targetConv);

    if (lastInMessage) {
      const now = new Date();
      lastInMessage.dateSeen = now;
      this.chatService.emitConversationSeen(targetConv.user.id, now);
    }
  }

  getLastMessageFrom(conv: Conversation): ChatMessage {
    const length = conv.messages.length;
    return conv.messages[length - 1];
  }

  getLastInMessageFrom(conv: Conversation): ChatMessage {
    const { messages } = conv;
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].isIncoming) {
        return messages[i];
      }
    }

    return null;
  }

  getLastOutMessageFrom(conv: Conversation): ChatMessage {
    const { messages } = conv;
    for (let i = messages.length - 1; i >= 0; i--) {
      if (!messages[i].isIncoming) {
        return messages[i];
      }
    }

    return null;
  }

  isConversationSeenBySelf(conv: Conversation): boolean {
    const lastMessage = this.getLastInMessageFrom(conv);

    if (lastMessage === null) {
      return true
    } else {
      return (!!lastMessage.dateSeen);
    }
  }

  isConversationSeen(conv: Conversation): boolean {
    const lastMessage = this.getLastMessageFrom(conv);
    return (lastMessage && !lastMessage.isIncoming && lastMessage.dateSeen !== null);
  }

}
