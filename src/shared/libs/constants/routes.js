import { routeConfig } from "@/app/config/routeConfig";

export const getHomeRoute = () => routeConfig.home;

export const getProfileRoute = () => routeConfig.profile;

export const getRegisterRoute = () => routeConfig.register;

export const getLoginRoute = () => routeConfig.login;

export const getDonatesRoute = () => routeConfig.donates;

export const getSingleDonateRoute = (id) =>
  routeConfig.singleDonate.replace(":id", id);
