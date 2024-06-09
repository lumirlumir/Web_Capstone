import { useCallback, useRef } from 'react';

/**
 *
 * @returns
 */
const useContent = () => {
  /* Hooks */
  // useRef
  const contentRef = useRef(null);

  /* Func */
  const getTextContent = useCallback(() => {
    return contentRef.current.innerText;
  }, []);
  const getHTMLContent = useCallback(() => {
    return contentRef.current.innerHTML;
  }, []);
  const setHTMLContent = useCallback(val => {
    contentRef.current.innerHTML = val;
  }, []);

  /* Return */
  return {
    contentRef,
    getTextContent,
    getHTMLContent,
    setHTMLContent,
  };
};

export default useContent;
