import type { PropsWithChildren } from "react";
import styles from "./button.module.css";

type ButtonProps = PropsWithChildren<{
  onClick: () => void;
  className?: string;
}>;

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
