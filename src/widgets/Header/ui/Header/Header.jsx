// react
import { Link } from "react-router-dom";
// constants
import {
  getHomeRoute,
  getRegisterRoute,
  getProfileRoute,
  getLoginRoute,
  getDonatesRoute,
} from "@/shared/libs/constants/routes";

// styles
import styles from "./Header.module.scss";

export const Header = ({}) => {
  return <div className={styles.Header}></div>;
};
