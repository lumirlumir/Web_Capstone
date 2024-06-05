import openaiJson from '@/data/openai.json';
import openaiInstance from '@/services/openaiInstance';
import { createMessagesObject, stringArrayToMessagesObjectArray } from '@/utils/openaiUtils';

const fetch = async messages => {
  const response = await openaiInstance.chat.completions.create({
    ...openaiJson.requestBody,
    messages,
  });

  return response?.choices?.[0]?.message?.content;
};

/**
 *
 * @param {string} type select among 'cs', 'fe', 'be', 'db', 'oop'
 * @param {string[]} history
 * @returns
 */
export const fetchQuestionMain = async (type, history) => fetch([...openaiJson.fetchQuestionMain[type.toLowerCase()].messages, ...stringArrayToMessagesObjectArray('assistant', history)]);

/**
 *
 * @param {string} question
 * @param {string} answerUser
 * @returns
 */
export const fetchQuestionSub = async (question, answerUser) => fetch([...openaiJson.fetchQuestionSub.messages, createMessagesObject('user', `Previous Question\n\n${question}\n\nUSER's Answer\n\n${answerUser}`)]);

/**
 *
 * @param {string} question
 * @returns
 */
export const fetchAnswer = async question => fetch([...openaiJson.fetchAnswer.messages, createMessagesObject('user', question)]);

/**
 *
 * @param {string} answerSystem
 * @param {string} answerUser
 * @returns
 */
export const fetchFeedback = async (answerSystem, answerUser) => fetch([...openaiJson.fetchFeedback.messages, createMessagesObject('user', `Correct Answer\n\n${answerSystem}\n\nUSER's Answer\n\n${answerUser}`)]);

/*
TODO: make enum type and adjust openai.json

ex)

const generateType = {
  fetchQuestionMain: 1
  generateAnswer: 2
  //...
}
*/
