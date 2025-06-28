import geminiApi from "../gemini.api";


export const getBasicPrompt = async (prompt: string) => {
    try{
      const response = await geminiApi.post('/basic-prompt', { prompt },{responseType: 'text'});
      return await response.data;
    }catch(error){
        console.error("Error in getBasicPrompt:", error);
        throw error;
    }
    
        
}