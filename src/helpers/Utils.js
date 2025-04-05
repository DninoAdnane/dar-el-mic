import {
  defaultDirection,
  defaultLocale,
  localeOptions,
  defaultColor,
  themeColorStorageKey,
} from "@/constants/defaultValues";

export const setDirection = (localValue) => {
  let direction = "ltr";
  if (localValue === "rtl" || localValue === "ltr") {
    direction = localValue;
  }
  try {
    localStorage.setItem("direction", direction);
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js : setDirection -> error", error);
  }
};

export const getDirection = () => {
  let direction = defaultDirection;

  try {
    if (localStorage.getItem("direction")) {
      const localValue = localStorage.getItem("direction");
      if (localValue === "rtl" || localValue === "ltr") {
        direction = localValue;
      }
    }
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js : getDirection -> error", error);
    direction = defaultDirection;
  }
  return {
    direction,
    isRtl: direction === "rtl",
  };
};

export const getCurrentUser = () => {
  let user = null;
  try {
    user =
      localStorage.getItem("current_user") != null
        ? JSON.parse(localStorage.getItem("current_user"))
        : null;
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js  : getCurrentUser -> error", error);
    user = null;
  }
  return user;
};

export const setCurrentUser = (user) => {
  try {
    if (user) {
      localStorage.setItem("current_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("current_user");
    }
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js : setCurrentUser -> error", error);
  }
};

export const getReservationData = () => {
  let reservationData = null;
  try {
    reservationData =
      localStorage.getItem("reservation_data") != null
        ? JSON.parse(localStorage.getItem("reservation_data"))
        : null;
  } catch (error) {
    console.log(
      ">>>>: src/helpers/Utils.js  : getReservationData -> error",
      error
    );
    reservationData = null;
  }
  return reservationData;
};

export const setReservationData = (reservationData) => {
  try {
    if (reservationData) {
      localStorage.setItem("reservation_data", JSON.stringify(user));
    } else {
      localStorage.removeItem("reservation_data");
    }
  } catch (error) {
    console.log(
      ">>>>: src/helpers/Utils.js : setReservationData -> error",
      error
    );
  }
};

export const getCurrentLanguage = () => {
  let language = defaultLocale;
  try {
    language =
      localStorage.getItem("currentLanguage") &&
      localeOptions.filter(
        (x) => x.id === localStorage.getItem("currentLanguage")
      ).length > 0
        ? localStorage.getItem("currentLanguage")
        : defaultLocale;
  } catch (error) {
    console.log(
      ">>>>: src/helpers/Utils.js : getCurrentLanguage -> error",
      error
    );
    language = defaultLocale;
  }
  return language;
};
export const setCurrentLanguage = (locale) => {
  try {
    localStorage.setItem("currentLanguage", locale);
  } catch (error) {
    console.log(
      ">>>>: src/helpers/Utils.js : setCurrentLanguage -> error",
      error
    );
  }
};

export const getCurrentColor = () => {
  let currentColor = defaultColor;
  try {
    if (localStorage.getItem(themeColorStorageKey)) {
      currentColor = localStorage.getItem(themeColorStorageKey);
    }
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js : getCurrentColor -> error", error);
    currentColor = defaultColor;
  }
  return currentColor;
};

export const setCurrentColor = (color) => {
  try {
    localStorage.setItem(themeColorStorageKey, color);
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js : setCurrentColor -> error", error);
  }
};

/******************************************************************************/

const toCamelCase = (str) => {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
};

export const transformKeysToCamelCaseArray = (arr) => {
  return arr.map((obj) =>
    Object.fromEntries(
      Object.entries(obj).map(([key, value]) =>
        key === "public_id" ? [key, value] : [toCamelCase(key), value]
      )
    )
  );
};
