const base_url = import.meta.env.VITE_BACK_URL;

/*************************USER***********************/
export const ACCOUT_USER = `${base_url}/user/account/user`;
export const USER_ACCOUNT_TOKEN = `${base_url}/user/token`;
export const USER_ACOUNT_REFRESH_TOKEN = `${base_url}/user/token/refresh`;
export const REGISTER_ACCOUNT_USER = `${base_url}/user/register`;

/**********************RESOURCES *****************************/
export const GET_PACKAGES = `${base_url}/resources/packages/`;
export const GET_SERVICES_PACKAGE = (service_id) =>
  `${base_url}/resources/packages/${service_id}/services/`;
export const GET_DECORS = `${base_url}/resources/decors/`;
