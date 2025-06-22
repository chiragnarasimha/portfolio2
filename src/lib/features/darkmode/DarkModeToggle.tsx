import React, { FC } from "react";

type Props = {
  className?: string;
};
const DarkModeToggle: FC<Props> = ({ className }) => {
  return <div className={className}>hi</div>;
};
export default DarkModeToggle;
