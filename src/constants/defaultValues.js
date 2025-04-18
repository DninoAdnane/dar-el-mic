export const UserRole = {
  Admin: 0,
  Editor: 1,
  User: 2,
};

/*
  Menu Types:
  "menu-default", "menu-sub-hidden", "menu-hidden"
  */
export const defaultMenuType = "menu-hidden";

export const subHiddenBreakpoint = 1440;
export const menuHiddenBreakpoint = 768;
export const defaultLocale = "en";
export const localeOptions = [
  { id: "en", name: "English - LTR", direction: "ltr" },
  { id: "es", name: "Español", direction: "ltr" },
  { id: "enrtl", name: "English - RTL", direction: "rtl" },
];

//   export const firebaseConfig = {
//     apiKey: 'AIzaSyBBksq-Asxq2M4Ot-75X19IyrEYJqNBPcg',
//     authDomain: 'gogo-react-login.firebaseapp.com',
//     databaseURL: 'https://gogo-react-login.firebaseio.com',
//     projectId: 'gogo-react-login',
//     storageBucket: 'gogo-react-login.appspot.com',
//     messagingSenderId: '216495999563',
//   };

export const adminRoot = "/app";
//   export const buyUrl = 'https://1.envato.market/k4z0';
export const searchPath = `${adminRoot}/#`;
//   export const servicePath = 'https://api.coloredstrategies.com';
export const reservationRoot = "app/reserver";

export const currentUser = {
  access_token: "",
  refresh_token: "",
  email: "",
  date_of_birth: "",
  phone: "",
  role: UserRole.User,
};

export const reservation = {
  decor: null,
  package: null,
  services: [],
  dateTime: null,
};

export const themeColorStorageKey = "__theme_selected_color";
export const isMultiColorActive = false;
export const defaultColor = "light.greysteel";
export const isDarkSwitchActive = true;
export const defaultDirection = "ltr";
//   export const themeRadiusStorageKey = '__theme_radius';
export const isAuthGuardActive = true;
export const colors = [
  "bluenavy",
  "blueyale",
  "blueolympic",
  "greenmoss",
  "greenlime",
  "purplemonster",
  "orangecarrot",
  "redruby",
  "yellowgranola",
  "greysteel",
];
