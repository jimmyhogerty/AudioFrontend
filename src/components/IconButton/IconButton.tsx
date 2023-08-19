import React from "react";
import styles from "./IconButton.module.css";
import classNames from "classnames";
import { Button, ButtonProps } from "../Button";
import SvgIcon from "../SvgIcon/SvgIcon";

interface IconButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
  icon: string;
  height?: number;
  width?: number;
  onIconClick?: () => void;
}

export const IconButton = ({
  children,
  className,
  icon,
  height,
  width,
  onIconClick,
  ...props
}: IconButtonProps) => {
  return (
    <Button className={classNames(styles.IconButton, className)} {...props}>
      <SvgIcon
        className={styles.Icon}
        height={height}
        width={width}
        svg={icon}
        onClick={onIconClick}
      />
      {children}
    </Button>
  );
};
