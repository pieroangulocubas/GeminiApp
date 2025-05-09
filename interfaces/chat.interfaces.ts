interface IMessage {
  id: string;
  createdAt: Date;
  sender: string;
  type: 'text' | 'image';
}

export interface ImagesMessage extends IMessage {
  images: string[];
  text?: string;
}

export interface TextMessage extends IMessage {
  text: string;
}

export type Message = ImagesMessage | TextMessage;
