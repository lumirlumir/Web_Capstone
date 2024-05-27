import openaiJson from '@/data/openai.json';
import { openaiInstance } from '@/utils/openai';

const generateQuestion = async (type, history) => {
  const response = await openaiInstance.chat.completions.create({
    ...openaiJson.requestBody,
    messages: [...openaiJson.generateQuestionMain[type.toLowerCase()].messages, ...history],
  });

  // console.log(response?.choices?.[0]?.message?.content);

  return response?.choices?.[0]?.message?.content;
};

export default generateQuestion;
