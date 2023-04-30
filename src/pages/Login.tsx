import { useState } from "react";
import styles from "../styles/login.module.scss";
import { LoginImg, Logo } from "../assets";
import { Button, CustomizeInput } from "../components";
import { useFormik } from "formik";
import { loginSchema } from "../schema";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (payload: any, actions: any) => {
    console.log(payload);
    navigate("/dashboard/home");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isSubmitting,
  }: any = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit,
  });

  const getError = (key: any) => {
    return touched[key] && errors[key];
  };

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
        <form onSubmit={handleSubmit}>
          <CustomizeInput
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={getError("email")}
            placeholder="Email"
            className="input-control"
          />
          <div className={styles.showCon}>
            <div
              className={`${styles.showPassword} ${
                errors.password && touched.password ? "error" : ""
              }`}
            >
              <CustomizeInput
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                containerClass={styles.customizeInput}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Password"
                className={styles.input}
                autoComplete="off"
              />
              <p onClick={() => setShowPassword((prev) => !prev)}>Show</p>
            </div>
            {errors.password && touched.password ? (
              <p className="errortxt">{errors.password}</p>
            ) : (
              ""
            )}
          </div>
          <p>Forgot PASSWORD?</p>
          <Button
            type="submit"
            disabled={isSubmitting}
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
