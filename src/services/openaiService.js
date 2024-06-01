import openaiJson from '@/data/openai.json';
import openaiInstance from '@/services/openaiInstance';
import { createMessagesObject, stringArrayToMessagesObjectArray } from '@/utils/openaiUtils';

const generate = async messages => {
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
export const generateQuestionMain = async (type, history) => generate([...openaiJson.generateQuestionMain[type.toLowerCase()].messages, ...stringArrayToMessagesObjectArray('assistant', history)]);

/**
 *
 * @param {string} question
 * @returns
 */
export const generateAnswerSystem = async question => generate([...openaiJson.generateAnswerSystem.messages, createMessagesObject('user', question)]);

/**
 *
 * @param {string} answerSystem
 * @param {string} answerUser
 * @returns
 */
export const generateFeedbackGrade = async (answerSystem, answerUser) => generate([...openaiJson.generateFeedbackGrade.messages, createMessagesObject('user', `Correct Answer\n\n${answerSystem}\n\nUSER's Answer\n\n${answerUser}`)]);

/**
 *
 * @param {string} question
 * @param {string} answerUser
 * @returns
 */
export const generateQuestionSub = async (question, answerUser) => generate([...openaiJson.generateQuestionSub.messages, createMessagesObject('user', `Previous Question\n\n${question}\n\nUSER's Answer\n\n${answerUser}`)]);

/*
TODO: make enum type and adjust openai.json

ex)

const generateType = {
  generateQuestionMain: 1
  generateAnswer: 2
  //...
}
*/
