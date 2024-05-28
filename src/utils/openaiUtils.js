/**
 *
 * @param {string} role select among 'system', 'assistant', 'user'
 * @param {string} text
 * @returns
 */
export const createMessagesObject = (role, text) => ({
  role,
  content: [
    {
      text,
      type: 'text',
    },
  ],
});

/**
 *
 * @param {string} role select among 'system', 'assistant', 'user'
 * @param {string[]} array
 * @returns
 */
export const stringArrayToMessagesObjectArray = (role, array) => {
  const returnArray = [];

  for (let i = 0; i < array.length; i += 1) {
    returnArray.push(createMessagesObject(role, array[i]));
  }

  return returnArray;
};
