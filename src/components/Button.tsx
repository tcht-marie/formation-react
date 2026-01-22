import type { PropsWithChildren } from "react";
import styles from "./button.module.css";

type ButtonProps = PropsWithChildren<{
  className?: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
}>;

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
