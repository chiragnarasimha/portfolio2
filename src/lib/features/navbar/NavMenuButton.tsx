import React, { FC } from "react";

type Props = {
  className: string;
};
const NavMenuButton: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <input type={"checkbox"} />
    </div>
  );
};
export default NavMenuButton;
