import { ButtonIProp } from "../../utils/types";

const Button = ({ text, disabled, className, type, onClick }: ButtonIProp) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${className} btn`}
    >
      {text}
    </button>
  );
};

export default Button;
