export interface ChatMessage {
    id: number;
    authorId: number;
    targetId: number;
    dateSent: Date;
    dateSeen: Date;
    content: string;
}