webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".header {\n    background-color: #FFF;\n}\n  \n.main-section {\n    background-color: #5B666F;\n}\n  \n.chat-main {\n    height: 705px;\n    background-color: #FFF;\n    overflow: hidden;\n}\n  \n.chat-window {\n    background-color: #D8DFE6;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row header no-gutters\">\n    <div class=\"col\">\n        <div class=\"container p-0 mt-3\">\n            <h2>{{ title }}</h2>\n        </div>\n    </div>\n</div>\n\n<div class=\"row no-gutters main-section\">\n    <div class=\"col\">\n\n        <div class=\"my-3 p-0 d-flex container rounded chat-main\">\n            <div class=\"flex-shrink-1 flex-grow-1 row no-gutters\">\n\n                <ng-template #welcomeScreen>\n\n                    <div class=\"col d-flex flex-column justify-content-center\">\n\n                        <div class=\"text-center\">\n                            <h5 class=\"mb-0\">Welcome to chat!</h5>\n                            <p class=\"info-section-bio\">\n                                Please select a conversation\n                            </p>\n                        </div>\n\n                    </div>\n                    \n                </ng-template>\n    \n                <app-conversation-window\n                    *ngIf=\"selectedConversation; else welcomeScreen\"\n                    class=\"col d-flex flex-column chat-window\">\n                </app-conversation-window>\n                \n                <app-chat-nav class=\"col-3 border d-flex flex-column justify-content-start\">\n                </app-chat-nav>\n\n            </div>\n        </div>\n            \n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_conversation_service__ = __webpack_require__("./src/app/services/conversation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(conversationService) {
        this.conversationService = conversationService;
        this.selectedConversation = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.conversationService.getSelectedConversation()
            .subscribe(function (conv) {
            _this.selectedConversation = conv;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_conversation_service__["a" /* ConversationService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__conversation_window_conversation_window_component__ = __webpack_require__("./src/app/conversation-window/conversation-window.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_nav_chat_nav_component__ = __webpack_require__("./src/app/chat-nav/chat-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_conversation_service__ = __webpack_require__("./src/app/services/conversation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__message_message_component__ = __webpack_require__("./src/app/message/message.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__conversation_window_conversation_window_component__["a" /* ConversationWindowComponent */],
                __WEBPACK_IMPORTED_MODULE_5__chat_nav_chat_nav_component__["a" /* ChatNavComponent */],
                __WEBPACK_IMPORTED_MODULE_9__message_message_component__["a" /* MessageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_conversation_service__["a" /* ConversationService */],
                __WEBPACK_IMPORTED_MODULE_6__services_chat_service__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_7__services_websocket_service__["a" /* WebsocketService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat-nav/chat-nav.component.css":
/***/ (function(module, exports) {

module.exports = "#contact-list {\n    overflow-y: scroll;\n}\n\n#contact-list:hover::-webkit-scrollbar {\n    width: 0.65rem;\n}\n\n#contact-list::-webkit-scrollbar-track {\n    background-color: rgba(0, 0, 0, 0.03);\n}\n\n#contact-list::-webkit-scrollbar {\n    width: 0;\n}\n\n#contact-list::-webkit-scrollbar-thumb {\n    background-color: rgba(0, 0, 0, 0.1);\n}\n\n.conversation-prev {\n    line-height: 1.2;\n}\n\n.conversation-prev:hover {\n    background-color: rgba(0, 0, 0, 0.03);\n    cursor: pointer;\n}\n\n.conversation-prev.selected {\n    background-color: rgba(0, 0, 0, 0.03);\n}\n\n.conversation-prev.unseen {\n    color: indianred;\n}\n\n.msg-prev {\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    opacity: 0.5;\n    word-break: break-word;\n}\n\n.filter-btn {\n    opacity: 0.5;\n    background-color: rgba(0, 0, 0, 0.03);\n    width: 100%;\n    height: 2.5rem;\n    border: 0;\n    outline: none !important;\n}\n\n.filter-btn.online {\n    border-right: 1px solid #dee2e6;\n    border-bottom: 1px solid #dee2e6;\n}\n\n.filter-btn.all {\n    border-left: 1px solid #dee2e6;\n    border-bottom: 1px solid #dee2e6;    \n}\n\n.filter-btn.selected {\n    opacity: 0.7;\n    background-color:#fff;\n    border: none;\n}\n\n.filter-btn:hover {\n    cursor: pointer;\n}\n\n.avatar-thumb-container {\n    position: relative;\n}\n\n.avatar-thumb {\n    width: 64px;\n}\n\n.avatar-thumb-circle {\n    position: absolute;\n    bottom: -6%;\n    right: -10%;\n    border: solid 3px #FFF;\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    background-color: #66D356;\n}\n\n.avatar-thumb::before{\n    content: '';\n    display: inline-block;\n    width: 15px;\n    height: 15px;\n    border-radius: 7.5px;\n    background-color: #69b6d5;\n}\n"

/***/ }),

/***/ "./src/app/chat-nav/chat-nav.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row text-center no-gutters flex-shrink-0\">\n    <div class=\"col\">\n        <button\n            class=\"filter-btn online\"\n            [class.selected]=\"showOnline\"\n            (click)=\"setShowOnline(true)\">\n            <small>Online</small>\n        </button>\n    </div>\n    <div class=\"col\">\n        <button\n            class=\"filter-btn all\"\n            [class.selected]=\"!showOnline\"\n            (click)=\"setShowOnline(false)\">\n            <small>All</small>\n        </button>\n    </div>\n</div>\n\n<ul id=\"contact-list\" class=\"m-0 list-unstyled flex-shrink-1 flex-grow-1\">\n\n    <li\n        class=\"media conversation-prev px-3 py-2\"\n        (click)=\"conversationOnClick(conv)\"\n        *ngFor=\"let conv of conversationsToShow()\"\n        [class.selected]=\"selectedConversation && conv.user.id === selectedConversation.user.id\"\n        [class.unseen]=\"!isConversationSeenBySelf(conv)\">\n\n        <div class=\"mr-3 align-self-start avatar-thumb-container\">\n            <img class=\"avatar-thumb rounded\" src=\"{{ conv.user.avatar }}\" alt=\"avatar\">\n            <div class=\"avatar-thumb-circle\" *ngIf=\"conv.user.isOnline\"></div>\n        </div>\n\n        <div class=\"media-body\">\n            <h6 class=\"m-0\">{{ conv.user.name }}</h6>\n            <div class=\"msg-prev\" *ngIf=\"conv.messages.length > 0\">\n                <small>{{ getLastMessage(conv).content }}</small>\n            </div>\n        </div>\n\n    </li>\n\n</ul>\n\n<div class=\"p-3 mt-auto flex-shrink-0\">\n    <input\n        (keyup)=\"search($event.target.value)\"\n        class=\"form-control\"\n        type=\"text\"\n        placeholder=\"Search...\">\n</div>\n"

/***/ }),

/***/ "./src/app/chat-nav/chat-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_conversation_service__ = __webpack_require__("./src/app/services/conversation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatNavComponent = /** @class */ (function () {
    function ChatNavComponent(conversationService) {
        this.conversationService = conversationService;
        this.showOnline = false;
        this.showSearchResults = false;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
    }
    ChatNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.conversationService.getConversations()
            .subscribe(function (conversations) {
            _this.conversations = conversations;
        });
        this.conversationService.getOnlineConversations()
            .subscribe(function (onlineConversations) {
            _this.onlineConversations = onlineConversations;
        });
        this.conversationService.getSelectedConversation()
            .subscribe(function (conversation) {
            _this.selectedConversation = conversation;
        });
        this.conversationService.getSearchResults()
            .subscribe(function (searchResults) {
            _this.searchResults = searchResults;
            if (searchResults != null) {
                _this.showSearchResults = true;
                _this.showOnline = false;
            }
        });
        this.conversationService.searchConversations(this.searchTerms);
    };
    ChatNavComponent.prototype.conversationsToShow = function () {
        if (this.showSearchResults) {
            return this.searchResults;
        }
        else if (this.showOnline) {
            return this.onlineConversations;
        }
        else {
            return this.conversations;
        }
    };
    ChatNavComponent.prototype.search = function (term) {
        if (term === '') {
            this.showSearchResults = false;
        }
        else {
            this.searchTerms.next(term);
        }
    };
    ChatNavComponent.prototype.setShowOnline = function (value) {
        this.showOnline = value;
    };
    ChatNavComponent.prototype.isConversationSeenBySelf = function (conversation) {
        var result = this.conversationService.isConversationSeenBySelf(conversation);
        return result;
    };
    ChatNavComponent.prototype.getLastMessage = function (conversation) {
        return this.conversationService.getLastMessageFrom(conversation);
    };
    ChatNavComponent.prototype.conversationOnClick = function (conversation) {
        this.conversationService.selectConversation(conversation);
    };
    ChatNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-chat-nav',
            template: __webpack_require__("./src/app/chat-nav/chat-nav.component.html"),
            styles: [__webpack_require__("./src/app/chat-nav/chat-nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_conversation_service__["a" /* ConversationService */]])
    ], ChatNavComponent);
    return ChatNavComponent;
}());



/***/ }),

/***/ "./src/app/conversation-window/conversation-window.component.css":
/***/ (function(module, exports) {

module.exports = ".avatar-big {\n    height: 150px;\n}\n\n.info-section {\n    background-color: #C0CAD8;\n    line-height: 1.3;\n    z-index: 1;\n}\n\n.info-section-bio {\n    opacity: 0.7;\n}\n\n#message-list {\n    height: 370px;\n    overflow-y: scroll;\n}\n\n#message-list::-webkit-scrollbar {\n    width: 0.65rem;\n}\n\n#message-list::-webkit-scrollbar-track {\n    border-radius: 8px;\n    background-color: #C0CBD8;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n}\n\n#message-list::-webkit-scrollbar-thumb {\n    border-radius: 8px;\n    background-color: #9FAAB8;\n}\n\n.msg-seen-container {\n    margin-top: -1.3rem;\n}\n\n.msg-seen-timestamp {\n    width: 75%;\n    opacity: 0.3;\n}\n\n.is-typing-container {\n    position: relative;\n}\n\n.is-typing-text {\n    position: absolute;\n    background-color: rgba(0,0,0,0);\n    width: 100%;\n    bottom: 0%;\n}"

/***/ }),

/***/ "./src/app/conversation-window/conversation-window.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"media flex-shrink-0 shadow-sm info-section\">\n    <img class=\"avatar-big align-self-start\" src=\"{{ selectedConversation.user.avatar }}\" alt=\"avatar\">\n    <div class=\"media-body mx-3 mt-3\">\n        <h5 class=\"mb-0\">{{ selectedConversation.user.name }}</h5>\n        <div class=\"info-section-bio\">\n            {{ selectedConversation.user.bio }}\n        </div>\n    </div>\n</div>\n\n<div id=\"message-list\" class=\"py-3 px-2 mx-2 flex-grow-1\">\n    <ul class=\"list-unstyled m-0\">\n\n        <li class=\"mb-4\" *ngFor=\"let msg of selectedConversation.messages\">\n            <app-message\n                class=\"d-flex\"\n                [class.justify-content-end]=\"!msg.isIncoming\"\n                [msg]=\"msg\">\n\n            </app-message>\n        </li>\n\n        <div\n            *ngIf=\"isConversationSeen()\"\n            class=\"d-flex justify-content-end msg-seen-container\">\n            <div class=\"pl-3 msg-seen-timestamp\">\n                <small>Seen {{ getLastMessage().dateSeen | date:'shortTime' }}</small>\n            </div>\n        </div>\n\n    </ul>\n</div>\n\n<div class=\"flex-shrink-0 is-typing-container\">\n    <p\n        *ngIf=\"userIsTyping\"\n        class=\"m-0 text-muted text-center is-typing-text\">\n        <small>{{ selectedConversation.user.name }} is typing...</small>\n    </p>\n</div>\n\n<div class=\"px-3 pb-3 d-flex flex-shrink-0\">\n    <div class=\"flex-grow-1\">\n        <input\n            (keydown)=\"onKeyDown($event)\"\n            [(ngModel)]=\"messageInput\"\n            class=\"form-control\"\n            type=\"text\"\n            placeholder=\"Start chatting!\"/>\n    </div>\n    <div>\n        <button (click)=\"sendMessage()\" class=\"btn btn-primary ml-3\">Send message</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/conversation-window/conversation-window.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationWindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_conversation_service__ = __webpack_require__("./src/app/services/conversation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConversationWindowComponent = /** @class */ (function () {
    function ConversationWindowComponent(chatService, conversationService) {
        this.chatService = chatService;
        this.conversationService = conversationService;
        this.selfTypingSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
    }
    ConversationWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.conversationService.getSelectedConversation()
            .subscribe(function (conversation) {
            if (_this.typingTimeOut) {
                clearTimeout(_this.typingTimeOut);
            }
            _this.userIsTyping = false;
            _this.selectedConversation = conversation;
        });
        this.chatService.typingEvents
            .subscribe(function (userId) {
            if (userId === _this.selectedConversation.user.id) {
                if (_this.typingTimeOut) {
                    clearTimeout(_this.typingTimeOut);
                }
                else {
                    _this.userIsTyping = true;
                }
                _this.typingTimeOut = setTimeout(function () {
                    _this.userIsTyping = false;
                    _this.typingTimeOut = undefined;
                }, 2000);
            }
        });
        this.chatService.messageEvents.subscribe(function (msg) {
            if (msg.isIncoming && msg.authorId === _this.selectedConversation.user.id) {
                _this.conversationService.setConversationAsSeen(_this.selectedConversation);
            }
        });
        this.emitTypingOnKeyDown(this.selfTypingSubject);
    };
    ConversationWindowComponent.prototype.isConversationSeen = function () {
        var result = this.conversationService.isConversationSeen(this.selectedConversation);
        return result;
    };
    ConversationWindowComponent.prototype.getLastMessage = function () {
        return this.conversationService.getLastMessageFrom(this.selectedConversation);
    };
    ConversationWindowComponent.prototype.emitTypingOnKeyDown = function (typing) {
        var _this = this;
        typing.throttleTime(1000).subscribe(function (isTyping) {
            _this.chatService.emitTyping(_this.selectedConversation.user.id);
        });
    };
    ConversationWindowComponent.prototype.sendMessage = function () {
        var content = this.messageInput.trim();
        if (content) {
            this.chatService.sendMessage(content, this.selectedConversation.user.id);
            this.messageInput = '';
        }
    };
    ConversationWindowComponent.prototype.onKeyDown = function (event) {
        var key = event.key;
        if (key === "Enter") {
            this.sendMessage();
        }
        else if (this.messageInput) {
            this.selfTypingSubject.next(true);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], ConversationWindowComponent.prototype, "messageInput", void 0);
    ConversationWindowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-conversation-window',
            template: __webpack_require__("./src/app/conversation-window/conversation-window.component.html"),
            styles: [__webpack_require__("./src/app/conversation-window/conversation-window.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_2__services_conversation_service__["a" /* ConversationService */]])
    ], ConversationWindowComponent);
    return ConversationWindowComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/***/ (function(module, exports) {

module.exports = ".msg-container {\n    width: 75%;\n}\n\n.msg-out {\n    position: relative;\n    margin-right: 0.7em;\n}\n\n.msg-in {\n    position: relative;\n    margin-left: 0.7em;\n}\n\n.msg-in::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 75%;\n    width: 0;\n    height: 0;\n    border: 0.7rem solid transparent;\n    border-right-color: #F5F8FB;\n    border-left: 0;\n    margin-top: -0.7rem;\n    margin-left: -0.7rem;\n}\n\n.msg-out::after {\n    content: '';\n    position: absolute;\n    right: 0;\n    top: 75%;\n    width: 0;\n    height: 0;\n    border: 0.7rem solid transparent;\n    border-left-color: #F5F8FB;\n    border-right: 0;\n    margin-top: -0.7rem;\n    margin-right: -0.7rem;\n}\n\n.msg-in-info {\n    background-color: #C0CBD8;\n}\n\n.msg-out-info {\n    background-color: #EACCB6;\n}\n\n.msg-username {\n    opacity: 0.7;\n}\n\n.msg-timestamp {\n    opacity: 0.4;\n}\n\n.msg-content {\n    background-color: #F5F8FB;\n    word-break: break-word;\n}\n\n"

/***/ }),

/***/ "./src/app/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"msg-container\">\n    <div\n        class=\"shadow-sm d-flex flex-column rounded\"\n        [class.msg-in]=\"msg.isIncoming\"\n        [class.msg-out]=\"!msg.isIncoming\">\n        <div\n            class=\"py-2 px-3 d-flex justify-content-between rounded-top msg-out-info\"\n            [class.msg-out-info]=\"!msg.isIncoming\"\n            [class.msg-in-info]=\"msg.isIncoming\">\n            <span class=\"msg-username\">\n              {{ msg.authorName }}\n            </span>\n            <span class=\"msg-timestamp ml-3\">\n                <small>\n                  {{ msg.dateSent | date:'shortTime' }}\n                </small>\n            </span>\n        </div>\n        <div\n        class=\"py-2 px-3 rounded-bottom msg-content\">\n          {{ msg.content }}\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngAfterViewInit = function () {
        var container = document.getElementById("message-list");
        container.scrollTop = container.scrollHeight;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "msg", void 0);
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-message',
            template: __webpack_require__("./src/app/message/message.component.html"),
            styles: [__webpack_require__("./src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_goby__ = __webpack_require__("./node_modules/goby/lib/goby.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_goby___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_goby__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = /** @class */ (function () {
    function ChatService(webSocketService) {
        this.webSocketService = webSocketService;
        var nameGenerator = __WEBPACK_IMPORTED_MODULE_1_goby__["init"]();
        this.userName = nameGenerator.generate(['pre', 'suf']);
        console.log('generated name', this.userName);
        webSocketService.connect(this.userName);
        this.messageEvents = webSocketService.getMessagesSubject();
        this.typingEvents = webSocketService.getTypingEventSubject();
        this.conversationSeenEvents = webSocketService.getConversationSeenEventSubject();
        this.userConnectedEvents = webSocketService.getUserConnectedSubject();
        this.userDisconnectedEvents = webSocketService.getUserDisconnectedSubject();
    }
    ChatService.prototype.sendMessage = function (content, target) {
        var msg = {
            id: null,
            authorId: null,
            targetId: target,
            authorName: this.userName,
            isIncoming: false,
            dateSent: new Date(),
            dateSeen: null,
            content: content
        };
        this.messageEvents.next(msg);
        this.webSocketService.emit('message', msg);
    };
    ChatService.prototype.emitTyping = function (targetId) {
        this.webSocketService.emit('typing', targetId);
    };
    ChatService.prototype.emitConversationSeen = function (targetId, time) {
        this.webSocketService.emit('conversation seen', targetId, time);
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__websocket_service__["a" /* WebsocketService */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/conversation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConversationService = /** @class */ (function () {
    function ConversationService(chatService, webSocketService) {
        var _this = this;
        this.chatService = chatService;
        this.webSocketService = webSocketService;
        this._conversations = [];
        this.mainConversationsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.onlineConversationsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.searchResults = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.selectedConversationSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.webSocketService.getUsers().subscribe(function (users) {
            _this._conversations = users.map(function (user) { return ({ user: user, messages: [] }); });
            _this.mainConversationsSubject.next(_this._conversations);
        });
        this.chatService.userConnectedEvents.subscribe(function (user) {
            _this._conversations.unshift({ user: user, messages: [] });
            _this.mainConversationsSubject.next(_this._conversations);
        });
        this.chatService.userDisconnectedEvents.subscribe(function (userId) {
            var conversation = _this._conversations.find(function (conv) { return conv.user.id === userId; });
            conversation.user.isOnline = false;
            _this.mainConversationsSubject.next(_this._conversations);
        });
        this.chatService.messageEvents.subscribe(function (message) {
            var authorId = message.authorId, targetId = message.targetId;
            var convIndex = _this._conversations.findIndex(function (conv) {
                return (conv.user.id === authorId || conv.user.id === targetId);
            });
            _this._conversations[convIndex].messages.push(message);
            if (convIndex > 0) {
                var targetConv = _this._conversations.splice(convIndex, 1)[0];
                _this._conversations.unshift(targetConv);
            }
            _this.mainConversationsSubject.next(_this._conversations);
        });
        this.chatService.conversationSeenEvents.subscribe(function (data) {
            var targetId = data.targetId, dateSeen = data.dateSeen;
            var targetConv = _this._conversations.find(function (conv) { return conv.user.id === targetId; });
            var lastOutMessage = _this.getLastOutMessageFrom(targetConv);
            if (lastOutMessage) {
                lastOutMessage.dateSeen = dateSeen;
                _this.mainConversationsSubject.next(_this._conversations);
            }
        });
        this.mainConversationsSubject.subscribe(function (conversations) {
            if (conversations) {
                var onlineConv = conversations.filter(function (conv) { return conv.user.isOnline; });
                _this.onlineConversationsSubject.next(onlineConv);
            }
        });
    }
    ConversationService.prototype.trigerSearch = function (name) {
        var pattern = new RegExp(name, 'i');
        var result = this._conversations.filter(function (conv) { return conv.user.name.match(pattern); });
        this.searchResults.next(result);
    };
    ConversationService.prototype.searchConversations = function (name) {
        var _this = this;
        name
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function (name) { return _this.trigerSearch(name); });
    };
    ConversationService.prototype.getConversations = function () {
        return this.mainConversationsSubject;
    };
    ConversationService.prototype.getOnlineConversations = function () {
        return this.onlineConversationsSubject;
    };
    ConversationService.prototype.getSelectedConversation = function () {
        return this.selectedConversationSubject;
    };
    ConversationService.prototype.getSearchResults = function () {
        return this.searchResults;
    };
    ConversationService.prototype.selectConversation = function (conversation) {
        var selectedConv = this.selectedConversationSubject.value;
        if (selectedConv === null || conversation.user.id !== selectedConv.user.id) {
            this.setConversationAsSeen(conversation);
            this.selectedConversationSubject.next(conversation);
        }
    };
    ConversationService.prototype.setConversationAsSeen = function (conversation) {
        var targetConv = this._conversations.find(function (conv) { return conv.user.id === conversation.user.id; });
        var lastInMessage = this.getLastInMessageFrom(targetConv);
        if (lastInMessage) {
            var now = new Date();
            lastInMessage.dateSeen = now;
            this.chatService.emitConversationSeen(targetConv.user.id, now);
        }
    };
    ConversationService.prototype.getLastMessageFrom = function (conv) {
        var length = conv.messages.length;
        return conv.messages[length - 1];
    };
    ConversationService.prototype.getLastInMessageFrom = function (conv) {
        var messages = conv.messages;
        for (var i = messages.length - 1; i >= 0; i--) {
            if (messages[i].isIncoming) {
                return messages[i];
            }
        }
        return null;
    };
    ConversationService.prototype.getLastOutMessageFrom = function (conv) {
        var messages = conv.messages;
        for (var i = messages.length - 1; i >= 0; i--) {
            if (!messages[i].isIncoming) {
                return messages[i];
            }
        }
        return null;
    };
    ConversationService.prototype.isConversationSeenBySelf = function (conv) {
        var lastMessage = this.getLastInMessageFrom(conv);
        if (lastMessage === null) {
            return true;
        }
        else {
            return (!!lastMessage.dateSeen);
        }
    };
    ConversationService.prototype.isConversationSeen = function (conv) {
        var lastMessage = this.getLastMessageFrom(conv);
        return (lastMessage && !lastMessage.isIncoming && lastMessage.dateSeen !== null);
    };
    ConversationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_3__websocket_service__["a" /* WebsocketService */]])
    ], ConversationService);
    return ConversationService;
}());



/***/ }),

/***/ "./src/app/services/websocket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connect = function (userName) {
        this._socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].socket_server_url, { query: { userName: userName } });
    };
    WebsocketService.prototype.getMessagesSubject = function () {
        var subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this._socket.on('new message', function (msg) {
            subject.next(msg);
        });
        return subject;
    };
    WebsocketService.prototype.getTypingEventSubject = function () {
        var subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this._socket.on('user typing', function (userId) {
            subject.next(userId);
        });
        return subject;
    };
    WebsocketService.prototype.getConversationSeenEventSubject = function () {
        var subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this._socket.on('conversation was seen', function (data) {
            subject.next(data);
        });
        return subject;
    };
    WebsocketService.prototype.getUserConnectedSubject = function () {
        var subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this._socket.on('new user connected', function (user) {
            subject.next(user);
        });
        return subject;
    };
    WebsocketService.prototype.getUserDisconnectedSubject = function () {
        var subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this._socket.on('user disconnected', function (userId) {
            subject.next(userId);
        });
        return subject;
    };
    WebsocketService.prototype.getUsers = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observer) {
            _this._socket.on('users', function (users) {
                observer.next(users);
                observer.complete();
            });
            _this._socket.emit('get users');
        });
    };
    WebsocketService.prototype.emit = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this._socket).emit.apply(_a, [eventName].concat(args));
        var _a;
    };
    WebsocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    socket_server_url: 'http://localhost:3000'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    socket_server_url: 'http://localhost:3000'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("./src/environments/environment.prod.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map