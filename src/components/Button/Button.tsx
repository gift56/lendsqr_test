import { Button } from "../../utils/types";

const Button = ({ text, disabled, className }: Button) => {
  return (
    <button disabled={disabled} className={`${className}`}>
      {text}
    </button>
  );
};

export default Button;
