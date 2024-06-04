import { useRef } from 'react';

/**
 *
 * @returns
 */
const useScroll = () => {
  /* Hooks */
  // useRef
  const scrollRef = useRef();

  /* Func */
  const scroll = () => scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });

  /* Return */
  return {
    scrollRef,
    scroll,
  };
};

export default useScroll;
