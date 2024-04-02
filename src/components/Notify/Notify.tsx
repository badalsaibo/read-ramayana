import Alert from '@mui/joy/Alert';

type Props = {
  text: string;
};

export default function Notify({ text }: Props) {
  return <Alert sx={{ justifyContent: 'center' }}>{text}</Alert>;
}
