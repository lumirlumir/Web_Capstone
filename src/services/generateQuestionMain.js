import openaiJson from '@/data/openai.json';
import { openaiInstance } from '@/utils/openai';

const generateQuestionMain = async (type, messages) => {
  const response = await openaiInstance.chat.completions.create({
    ...openaiJson.requestBody,
    messages: [...openaiJson.generateQuestionMain[type.toLowerCase()].messages, ...messages],
  });

  // console.log(response?.choices?.[0]?.message?.content);

  return response?.choices?.[0]?.message?.content;
};

export default generateQuestionMain;
