import { ChatMessage } from "./ChatMessage";
import { User } from "./User";

export interface Conversation {
    user: User;
    messages: ChatMessage[];
}