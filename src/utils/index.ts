import { renderToStaticMarkup } from 'react-dom/server';

export const getSvgStringFromComponent = ({ component }: { component: React.ReactElement }) =>
  encodeURIComponent(renderToStaticMarkup(component));

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
