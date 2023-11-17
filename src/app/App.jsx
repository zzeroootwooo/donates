// styles
import styles from "./App.module.scss";
// routes
import {
  getHomeRoute,
  getProfileRoute,
  getRegisterRoute,
  getLoginRoute,
  getDonatesRoute,
  getSingleDonateRoute,
} from "@/shared/libs/constants/routes";

const App = () => {
  return <div className={styles.app}></div>;
};

export default App;
