import { renderToStaticMarkup } from 'react-dom/server';

export const getSvgStringFromComponent = ({ component }: { component: React.ReactElement }) =>
  encodeURIComponent(renderToStaticMarkup(component));
