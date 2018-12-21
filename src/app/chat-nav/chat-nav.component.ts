import { Component, OnInit, Input } from '@angular/core';

import { Conversation } from '../models/Conversation';
import { ConversationService } from '../services/conversation.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chat-nav',
  templateUrl: './chat-nav.component.html',
  styleUrls: ['./chat-nav.component.css']
})
export class ChatNavComponent implements OnInit {

  private showOnline = false;
  private showSearchResults = false;
  private searchTerms = new Subject<string>(); 

  private conversations: Conversation[];
  private onlineConversations: Conversation[];
  private searchResults: Conversation[];
  private selectedConversation: Conversation;

  constructor(
    private conversationService: ConversationService
  ) { }

  ngOnInit() {
    
    this.conversationService.getConversations()
    .subscribe(conversations => {
      this.conversations = conversations;
    });
    
    this.conversationService.getOnlineConversations()
    .subscribe(onlineConversations => {
      this.onlineConversations = onlineConversations;
    });
    
    this.conversationService.getSelectedConversation()
    .subscribe(conversation => {
      this.selectedConversation = conversation;
    });
    
    this.conversationService.getSearchResults()
    .subscribe(searchResults => {
      this.searchResults = searchResults;
      if (searchResults != null) {
        this.showSearchResults = true;
        this.showOnline = false;
      }
    });
    
    this.conversationService.searchConversations(this.searchTerms);

  }

  conversationsToShow(): Conversation[] {
    if (this.showSearchResults) {
      return this.searchResults;
    } else if (this.showOnline) {
      return this.onlineConversations;
    } else {
      return this.conversations;
    }
  }
  
  search(term: string) {
    if (term === '') {
      this.showSearchResults = false;
    } else {
      this.searchTerms.next(term);
    }
  }

  setShowOnline(value: boolean) {
    this.showOnline = value;
  }

  isConversationSeenBySelf(conversation: Conversation): boolean {
    const result = this.conversationService.isConversationSeenBySelf(conversation);
    return result;
  }

  getLastMessage(conversation: Conversation) {
    return this.conversationService.getLastMessageFrom(conversation);
  }

  conversationOnClick(conversation) {
    this.conversationService.selectConversation(conversation);
  }

}
