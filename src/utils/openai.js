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
