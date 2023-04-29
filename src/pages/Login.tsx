import { useState } from "react";
import styles from "../styles/login.module.scss";
import { LoginImg, Logo } from "../assets";
import { Button, CustomizeInput } from "../components";
import { useFormik } from "formik";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {} = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className={styles.warpper}>
      <div className={styles.leftSide}>
        <div className={styles.logo}>
          <img src={Logo} alt="lendsqr_logo" />
        </div>
        <div className={styles.mainImg}>
          <div className={styles.loginImg}>
            <img src={LoginImg} alt="login_img" />
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.welcomeText}>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
        </div>
        <form>
          <CustomizeInput
            type="text"
            name="email"
            // value={values.email}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // error={getError("email")}
            placeholder="Email"
            className="input-control"
          />
          <div className={styles.showPassword}>
            <CustomizeInput
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              containerClass={styles.customizeInput}
              // value={values.password}
              // onChange={handleChange}
              // onBlur={handleBlur}
              // error={getError("password")}
              placeholder="Password"
              className={styles.input}
              autoComplete="off"
            />
            <p onClick={() => setShowPassword((prev) => !prev)}>Show</p>
          </div>
          <p>Forgot PASSWORD?</p>
          <Button
            type="submit"
            disabled={true}
            onClick={() => {}}
            text="LOG IN"
            className={styles.submitBtn}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
