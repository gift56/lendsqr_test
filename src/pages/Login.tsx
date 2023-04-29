import styles from "../styles/login.module.scss";
import { LoginImg, Logo } from "../assets";

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
      <div className={styles.rightSide}></div>
    </div>
  );
};

export default Login;
