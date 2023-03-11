import { TSvgProps } from './interface';

const ChevronRightCircle = ({ size = 24, color }: TSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ color }}
    >
      <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
    </svg>
  );
};

export default ChevronRightCircle;
