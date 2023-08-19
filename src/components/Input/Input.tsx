import React, { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";
import classNames from "classnames";

interface InputProps extends Partial<InputHTMLAttributes<HTMLInputElement>> {
  className?: string;
  onHandleSubmit: VoidFunction;
  iconButton?: React.ReactNode;
}

export const Input = ({
  className,
  onHandleSubmit,
  iconButton,
  ...props
}: InputProps) => {
  return (
    <div className={styles.InputContainer}>
      <form
        className={styles.Form}
        onSubmit={(e) => {
          e.preventDefault();
          onHandleSubmit();
        }}
      >
        <input className={classNames(styles.Input, className)} {...props} />
      </form>
      {iconButton}
    </div>
  );
};
