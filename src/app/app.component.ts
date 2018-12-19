import { Component, OnInit } from '@angular/core';


import { Conversation } from './models/Conversation';
import { ConversationService } from './services/conversation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selectedConversation: Conversation = null;

  constructor(
    private conversationService: ConversationService
  ) { }

  ngOnInit() {
    this.conversationService.getSelectedConversation()
      .subscribe(conv => {
        this.selectedConversation = conv;
      }); 
  }
}
