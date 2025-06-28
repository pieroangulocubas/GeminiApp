import { ChatMessages } from '@/components/chat/ChatMessages';
import CustomInputBox from '@/components/chat/CustomInputBox';
import { useBasicPromptStore } from '@/store/basic-prompt/basic-prompt.store';
import { Layout } from '@ui-kitten/components';



const BasicPromptScreen = () => {
  const messages = useBasicPromptStore(state => state.messages)
  const isGeminiWriting = useBasicPromptStore(state => state.geminiWritting)
  const {addMessage} = useBasicPromptStore()

  const handleSendMessage = (text:string) => {
    addMessage(text);
  }
  return (
    <Layout style={{ flex: 1 }}>
      <ChatMessages messages={messages} isGeminiWriting={isGeminiWriting} />

      <CustomInputBox onSendMessage={handleSendMessage} />
    </Layout>
  );
};

export default BasicPromptScreen;
