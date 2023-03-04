import clsx from "clsx";

type TProps = {
  children: React.ReactNode;
  spacing?: number;
  direction?: "row" | "column";
};

const Stack = ({ children, spacing = 2, direction = "row" }: TProps) => {
  return (
    <div
      className={clsx("flex", `gap-[${spacing}rem]`, {
        "flex-row": direction === "row",
        "flex-column": direction === "column",
      })}
    >
      {children}
    </div>
  );
};

export default Stack;
