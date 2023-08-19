import React from "react";

interface IconProps {
  svg: string;
  height?: number;
  width?: number;
  className?: string;
  onClick?: () => void;
}

const SvgIcon = ({
  svg,
  height = 16,
  width = 16,
  className,
  onClick,
}: IconProps) => {
  return (
    <img
      onClick={onClick}
      className={className}
      height={height}
      width={width}
      src={svg}
      alt={"icon image"}
    />
  );
};

export default SvgIcon;
