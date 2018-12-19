import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConversationWindowComponent } from './conversation-window/conversation-window.component';
import { ChatNavComponent } from './chat-nav/chat-nav.component';


import { ChatService } from './services/chat.service';
import { WebsocketService } from './services/websocket.service';
import { ConversationService } from './services/conversation.service';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    ConversationWindowComponent,
    ChatNavComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ConversationService,
    ChatService,
    WebsocketService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
