import { Button } from '@mui/joy';

type TKandaProps = {
  children: React.ReactNode;
};

const Kanda = ({ children }: TKandaProps) => {
  return <Button variant="soft">{children}</Button>;
};

export default Kanda;
