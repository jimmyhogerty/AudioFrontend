import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

export interface ButtonProps
  extends Partial<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  className?: string;
  children: React.ReactNode;
  secondary?: boolean;
  pill?: boolean;
  disabled?: boolean;
}

export const Button = ({
  children,
  className,
  disabled,
  secondary,
  pill,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.Button, className, {
        [styles.disabled]: disabled,
        [styles.secondary]: secondary,
        [styles.pill]: pill,
      })}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
