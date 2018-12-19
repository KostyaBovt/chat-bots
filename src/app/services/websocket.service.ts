import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as io from 'socket.io-client';
import { Subject, Observable } from 'rxjs';
import { User } from '../models/User';
import { ChatMessage } from '../models/ChatMessage';

@Injectable()
export class WebsocketService {

  private _socket;

  constructor() { }

  connect(userName): void {
    this._socket = io(environment.socket_server_url, { query: { userName } });
  }

  // getMessagesSubject(): Subject<ChatMessage> {
  //   const observable = new Observable(observer => {
  //     this._socket.on('new message', (msg: ChatMessage) => {
  //       observer.next(msg);
  //     });
  //     return () => { this._socket.disconnect() }
  //   });
  
  //   const observer = {
  //     next: (msg: ChatMessage) => {
  //         this._socket.emit('message', msg);
  //     }
  //   };

  //   return Subject.create(observer, observable);
  // }

  // getTypingEventSubject(): Subject<any> {
  //   const observable = new Observable(observer => {
  //     this._socket.on('user typing', (userId: number) => {
  //       observer.next(userId);
  //     });
  //     return () => { this._socket.disconnect() }
  //   });
  
  //   const observer = {
  //     next: (targetId: number) => {
  //         this._socket.emit('typing', targetId);
  //     }
  //   };

  //   return Subject.create(observer, observable);
  // }

  getMessagesSubject(): Subject<ChatMessage> {
    const subject = new Subject<ChatMessage>();

    this._socket.on('new message', (msg: ChatMessage) => {
      subject.next(msg);
    });

    return subject;
  }

  getTypingEventSubject(): Subject<string> {
    const subject = new Subject<string>();

    this._socket.on('user typing', (userId: string) => {
      subject.next(userId);
    });

    return subject;
  }

  getConversationSeenEventSubject(): Subject<{ targetId: string, dateSeen: Date }> {
    const subject = new Subject<{ targetId: string, dateSeen: Date }>();

    this._socket.on('conversation was seen', (data: { targetId: string, dateSeen: Date }) => {
      subject.next(data);
    });

    return subject;
  }

  getUserConnectedSubject(): Subject<User> {
    const subject = new Subject<User>();

    this._socket.on('new user connected', (user: User) => {
      subject.next(user);
    });

    return subject;
  }

  getUserDisconnectedSubject(): Subject<string> {
    const subject = new Subject<string>();

    this._socket.on('user disconnected', (userId: string) => {
      subject.next(userId);
    });

    return subject;
  }

  getUsers(): Observable<User[]> {
    return new Observable(observer => {
      this._socket.on('users', (users: User[]) => {
        observer.next(users);
        observer.complete();
      });

      this._socket.emit('get users');
    })
  }

  emit(eventName, ...args) {
    this._socket.emit(eventName, ...args);
  }

}
