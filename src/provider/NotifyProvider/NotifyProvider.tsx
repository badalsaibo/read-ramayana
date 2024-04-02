import { AnimatePresence, motion } from 'framer-motion';
import { createContext, useCallback, useMemo, useRef, useState } from 'react';

import { styled } from '@mui/joy';
import Notify from 'components/Notify';
import { NotifyContextInterface, notifyInterface } from './interface';

export const NotifyContext = createContext<NotifyContextInterface | null>(null);

type Props = {
  children: React.ReactNode;
};

const notifyVariants = {
  hide: {
    opacity: 0,
    y: 0,
    x: '50%',
  },
  visible: {
    opacity: 1,
    y: 100,
    x: '50%',
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: {
      type: 'spring',
    },
  },
};

export default function NotifyProvider({ children }: Props) {
  const [text, setText] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const timeoutRef = useRef({
    timeoutId: 0,
  });

  const notify = useCallback(({ text, timeout = 500 }: notifyInterface) => {
    clearTimeout(timeoutRef.current.timeoutId);
    setShowAlert(true);
    setText(text);
    timeoutRef.current.timeoutId = window.setTimeout(() => {
      setShowAlert(false);
    }, timeout);
  }, []);

  const state: NotifyContextInterface = useMemo(
    () => ({
      notify,
    }),
    [notify]
  );

  return (
    <NotifyContext.Provider value={state}>
      <AnimatePresence>
        {showAlert && (
          <NotifyWrapper
            style={{ position: 'fixed', top: 0 }}
            variants={notifyVariants}
            initial="hide"
            animate="visible"
            exit="exit"
          >
            <Notify text={text} />
          </NotifyWrapper>
        )}
      </AnimatePresence>
      {children}
    </NotifyContext.Provider>
  );
}

const NotifyWrapper = styled(motion.div)(() => ({
  position: 'absolute',
  zIndex: 2,
  width: '50%',
  bottom: 100,
  right: '50%',
  // transform: 'translateX(50%)',
}));
