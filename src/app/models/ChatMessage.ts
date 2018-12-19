export interface ChatMessage {
    id: number;
    authorId: string;
    targetId: string;
    authorName: string;
    isIncoming: boolean;
    dateSent: Date;
    dateSeen: Date;
    content: string;
}