import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs/Observable';

import { ChatUser } from './ChatUser';
import { ChatMessageIn } from './ChatMessageIn';
import { ChatMessageOut } from './ChatMessageOut';


@Injectable()
export class ChatService {

  private _socket = io('http://localhost:3000');

  newUserConnected(): Observable<ChatUser> {
    const observable = new Observable<ChatUser> (observer => {
      this._socket.on('new user connected', user => {
        observer.next(user);
      });
      return () => { this._socket.disconnect() }
    });

    return observable;
  }

  userDisconnected(): Observable<number> {
    const observable = new Observable<number> (observer => {
      this._socket.on('user disconnected', userId => {
        observer.next(userId);
      });
      return () => { this._socket.disconnect() }
    });

    return observable;
  }

  messageReceived(): Observable<ChatMessageIn> {
    const observable = new Observable<ChatMessageIn> (observer => {
      this._socket.on('new message', (data) => {
        observer.next(data);
      });
      return () => { this._socket.disconnect() }
    });
    return observable;
  }

  sendMessage(message: ChatMessageOut): void {
    this._socket.emit('message', message);
  }

  emitConversationOpened(targetId: number): void {
    this._socket.emit('conversation opened', targetId);
  }

  emitTypingEvent(targetId: number): void {
    this._socket.emit('typing', targetId);
  }
}
