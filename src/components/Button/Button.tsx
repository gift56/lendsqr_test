import { ButtonIProp } from "../../utils/types";

const Button = ({ text, disabled, className }: ButtonIProp) => {
  return (
    <button disabled={disabled} className={`${className}`}>
      {text}
    </button>
  );
};

export default Button;
