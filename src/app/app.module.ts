import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConversationWindowComponent } from './conversation-window/conversation-window.component';
import { ChatNavComponent } from './chat-nav/chat-nav.component';


import { ChatService } from './services/chat.service';
import { WebsocketService } from './services/websocket.service';


@NgModule({
  declarations: [
    AppComponent,
    ConversationWindowComponent,
    ChatNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ChatService,
    WebsocketService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
