import { useCallback, useRef, useState } from 'react';

/**
 *
 * @returns
 */
const useContent = () => {
  /* Hooks */
  // useRef
  const contentRef = useRef(null);
  // useState
  const [contentState, setContentState] = useState('');

  /* Func */
  const clearContent = useCallback(() => {
    contentRef.current.innerHTML = '';
    setContentState('');
  }, []);
  const setContent = useCallback(text => {
    setContentState(text);
  }, []);

  /* Return */
  return {
    contentRef,
    contentState,
    clearContent,
    setContent,
  };
};

export default useContent;
