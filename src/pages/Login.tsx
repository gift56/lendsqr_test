import styles from "../styles/login.module.scss";
import { LoginImg, Logo } from "../assets";
import { CustomizeInput } from "../components";

const Login = () => {
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
            placeholder="Email address"
            className="bg-white border border-firstgray h-[48px] w-full rounded px-4 focus:border-primary outline-none text-sm text-gray-500 placeholder:text-gray-500"
          />
          <CustomizeInput
            type="password"
            name="password"
            containerClass="h-full"
            // value={values.password}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // error={getError("password")}
            placeholder="Password"
            className="bg-white border border-firstgray h-[48px] w-full rounded px-4 focus:border-primary outline-none text-sm text-gray-500 placeholder:text-gray-500"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
