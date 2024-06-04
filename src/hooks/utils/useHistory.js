import { useCallback, useState } from 'react';

/**
 *
 * @returns
 */
const useHistory = () => {
  /* Hooks */
  // useState
  const [historyState, setHistoryState] = useState([]);

  /* Func */
  const addHistory = useCallback(val => {
    setHistoryState(prevState => [...prevState, val]);
  }, []);

  /* Return */
  return {
    historyState,
    addHistory,
  };
};

export default useHistory;
