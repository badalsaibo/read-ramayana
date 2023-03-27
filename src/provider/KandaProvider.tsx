import { TKanda } from 'interface/kanda';
import { createContext, useMemo, useState } from 'react';

type KandaContextProps = {
  kanda: TKanda;
  setKanda: React.Dispatch<React.SetStateAction<TKanda>>;
};

const KandaContext = createContext<KandaContextProps | null>(null);

type KandaProviderProps = {
  children: React.ReactNode;
};

const KandaProvider = ({ children }: KandaProviderProps) => {
  const [kanda, setKanda] = useState<TKanda>('bala');

  const state = useMemo(
    () => ({
      kanda,
      setKanda,
    }),
    [kanda]
  );
  return <KandaContext.Provider value={state}>{children}</KandaContext.Provider>;
};

export { KandaContext };
export type { KandaContextProps };

export default KandaProvider;
