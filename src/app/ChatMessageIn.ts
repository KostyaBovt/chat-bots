export class ChatMessageIn {
    id: number;
    authorId: number;
    targetId: number;
    authorName: string;
    dateSent: Date;
    dateSeen: Date;
    content: string;
}