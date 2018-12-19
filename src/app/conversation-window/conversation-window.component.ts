import { Component, OnInit, Input } from '@angular/core';
import { Conversation } from '../models/Conversation';
import { ChatService } from '../services/chat.service';
import { ConversationService } from '../services/conversation.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-conversation-window',
  templateUrl: './conversation-window.component.html',
  styleUrls: ['./conversation-window.component.css']
})
export class ConversationWindowComponent implements OnInit {

  selfTypingSubject = new Subject<boolean>();

  userIsTyping: boolean;
  typingTimeOut: any;
  
  @Input() messageInput: string;
  selectedConversation: Conversation;

  constructor(
    private chatService: ChatService,
    private conversationService: ConversationService,
  ) { }

  ngOnInit() {

    this.conversationService.getSelectedConversation()
      .subscribe(conversation => {
        if (this.typingTimeOut) {
          clearTimeout(this.typingTimeOut);
        }

        this.userIsTyping = false;
        this.selectedConversation = conversation;
      });
    
    this.chatService.typingEvents
      .subscribe(userId => {
        if (userId === this.selectedConversation.user.id) {

          if (this.typingTimeOut) {
            clearTimeout(this.typingTimeOut);
          } else {
            this.userIsTyping = true;
          }

          this.typingTimeOut = setTimeout(() => {
            this.userIsTyping = false;
            this.typingTimeOut = undefined;
          }, 2000);
        }
      });

    this.chatService.messageEvents.subscribe(msg => {
      if (msg.isIncoming && msg.authorId === this.selectedConversation.user.id) {
        this.conversationService.setConversationAsSeen(this.selectedConversation);
      }
    });

    this.emitTypingOnKeyDown(this.selfTypingSubject);

  }

  isConversationSeen(): boolean {
    const result = this.conversationService.isConversationSeen(this.selectedConversation);
    return result;
  }

  getLastMessage() {
    return this.conversationService.getLastMessageFrom(this.selectedConversation);
  }

  emitTypingOnKeyDown(typing: Subject<boolean>) {
    typing.throttleTime(1000).subscribe(isTyping => {
      this.chatService.emitTyping(this.selectedConversation.user.id);
    })
  }

  sendMessage() {
    const content = this.messageInput.trim();
    if (content) {
      this.chatService.sendMessage(content, this.selectedConversation.user.id);
      this.messageInput = '';
    }
  }

  onKeyDown(event) {
    const { key } = event;
    if (key === "Enter") {
      this.sendMessage();
    } else if (this.messageInput) {
      this.selfTypingSubject.next(true);
    }
  }

}
