import { KandaContext, KandaContextProps } from 'provider/KandaProvider';
import { useContext } from 'react';

const useKanda = () => {
  const currentKanda = useContext<KandaContextProps | null>(KandaContext);
  if (!currentKanda) {
    throw new Error('useCurrentUser has to be used within <KandaProvider>');
  }

  return currentKanda;
};

export default useKanda;
