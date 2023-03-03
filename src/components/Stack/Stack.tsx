type TProps = {
  children: React.ReactNode;
};

const Stack = ({ children }: TProps) => {
  return <div className="flex">{children}</div>;
};

export default Stack;
