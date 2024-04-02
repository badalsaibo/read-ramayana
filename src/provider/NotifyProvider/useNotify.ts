import { useContext } from 'react';
import { NotifyContext } from './NotifyProvider';
import { NotifyContextInterface } from './interface';

const useNotify = () => useContext(NotifyContext) as NotifyContextInterface;

export default useNotify;
