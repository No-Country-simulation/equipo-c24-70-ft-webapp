import { FC } from "react";
import { CounterItemProps } from "../../Store/types";

export const CounterItem: FC<CounterItemProps> = ({ count, text }) => {
  return (
    <div>
      <h3 className="text__accent-purple">
        {count}
        <span>+</span>
      </h3>
      <p>{text}</p>
    </div>
  );
};
