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

  connect(): void {
    this._socket = io(environment.socket_server_url);
  }

  getMessagesSubject(): Subject<ChatMessage> {
    const observable = new Observable(observer => {
      this._socket.on('new message', (msg: ChatMessage) => {
        observer.next(msg);
      });
      return () => { this._socket.disconnect() }
    });
  
    const observer = {
      next: (msg: ChatMessage) => {
          this._socket.emit('message', JSON.stringify(msg));
      }
    };

    return Subject.create(observer, observable);
  }

  getTypingEventSubject(): Subject<any> {
    const observable = new Observable(observer => {
      this._socket.on('user typing', (userId: number) => {
        observer.next(userId);
      });
      return () => { this._socket.disconnect() }
    });
  
    const observer = {
      next: (targetId: number) => {
          this._socket.emit('typing', targetId);
      }
    };

    return Subject.create(observer, observable);
  }

  getUserConnectedSubject(): Subject<User> {
    const subject = new Subject<User>();

    this._socket.on('new user connected', (user: User) => {
      subject.next(user);
    });

    return subject;

    // const observable = new Observable(observer => {
    //   this._socket.on('new user connected', (user: User) => {
    //     observer.next(user);
    //   });
    //   return () => { this._socket.disconnect() }
    // });

    // return Subject.create(observable);
  }

  getUserDisconnectedSubject(): Subject<number> {
    const subject = new Subject<number>();

    this._socket.on('user disconnected', (userId: number) => {
      subject.next(userId);
    });

    return subject;

    // const observable = new Observable(observer => {
    //   this._socket.on('user disconnected', (user: User) => {
    //     observer.next(user);
    //   });
    //   return () => { this._socket.disconnect() }
    // });

    // return Subject.create(observable);
  }

}
