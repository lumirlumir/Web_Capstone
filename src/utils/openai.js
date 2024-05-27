import OpenAI from 'openai';

export const openaiInstance = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const createMessage = (role, text) => ({
  role,
  content: [
    {
      text,
      type: 'text',
    },
  ],
});

export const createMessageArray = array => {
  const returnArray = [];

  for (let i = 0; i < array.length; i += 1) {
    returnArray.push(createMessage('assistant', array[i]));
  }

  return returnArray;
};
