import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConversationWindowComponent } from './conversation-window/conversation-window.component';
import { ChatNavComponent } from './chat-nav/chat-nav.component';
import { ConversationListComponent } from './conversation-list/conversation-list.component';
import { ChatMainComponent } from './chat-main/chat-main.component';


@NgModule({
  declarations: [
    AppComponent,
    ConversationWindowComponent,
    ChatNavComponent,
    ConversationListComponent,
    ChatMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
