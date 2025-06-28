import * as GeminiActions from "@/actions/gemini/basic-prompt.action";
import { Message } from "@/interfaces/chat.interfaces";
import uuid from 'react-native-uuid';
import { create } from "zustand";

interface BasicPromptState{
    geminiWritting: boolean;
    messages:Message[];
    addMessage: (text: string) => void;
    setGeminiWritting: (writting: boolean) => void;
}

const createMessage = (text:string, sender: "user" | "gemini"): Message => {
    return {
    id: uuid.v4(),
    text: text,
    createdAt: new Date(),
    sender: sender,
    type: 'text',
    };
}
export const useBasicPromptStore = create<BasicPromptState>()((set) => ({
    // State
    geminiWritting: false,
    messages: [],
    // Actions
    addMessage: async (text:string) => {
        const userMessage: Message = createMessage(text, 'user');
        set((state)=> ({
            ...state,
            geminiWritting: true,
            messages: [ userMessage, ...state.messages], 
        }));


        const geminiReponseText = await GeminiActions.getBasicPrompt(text);
        const geminiMessage: Message = createMessage(geminiReponseText, 'gemini');
        set((state) => ({
            ...state,
            geminiWritting: false,
            messages: [geminiMessage, ...state.messages],
        }));
        
    },

    setGeminiWritting: (isWritting: boolean) => set((state) => ({
        ...state,
        geminiWritting: isWritting,
    })),

 }))