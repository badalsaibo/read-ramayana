import { styled } from '@mui/joy';

const fontSize = '1.5em';

const ArrowHr = () => {
  return <StyledHr />;
};

export default ArrowHr;

// https://codepen.io/scottzirkel/pen/yNxNME
const StyledHr = styled('hr')(() => ({
  position: 'relative',
  color: 'black',
  textAlign: 'center',
  height: fontSize, // needs to be equal to the svg image or center text
  border: 0,
  '&::before': {
    content: '',
    // use the linear-gradient for the fading effect
    // use a solid background color for a solid bar
    background: 'linear-gradient(to right, transparent, #818078, transparent)',
    position: 'absolute',
    left: ' 0',
    top: '50%',
    width: '100%',
    height: '1px',
  },
  '&::after': {
    content: 'Test',
    position: 'relative',
    display: 'inline-block',
    padding: ' 0 .5em',
    lineHeight: fontSize,
    // this is really the only tricky part, you need to specify the background color of the container element...
    color: 'red',
    backgroundColor: 'green',
  },
}));
