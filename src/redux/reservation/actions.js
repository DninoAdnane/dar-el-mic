import {
  RESERVATION_SET_DECOR,
  RESERVATION_SET_PACKAGE,
  RESERVATION_SET_SERVICE,
  RESERVATION_REMOVE_SERVICE,
  RESERVATION_SET_DATE_TIME,
  RESERVATION_SET_STEP,
} from "@/redux/contants";

export const setDecorId = (payload) => {
  return {
    type: RESERVATION_SET_DECOR,
    payload,
  };
};

export const setPackageId = (payload) => {
  return {
    type: RESERVATION_SET_PACKAGE,
    payload,
  };
};

export const setServiceId = (payload) => {
  return {
    type: RESERVATION_SET_SERVICE,
    payload,
  };
};

export const removeServiceId = (payload) => {
  return {
    type: RESERVATION_REMOVE_SERVICE,
    payload,
  };
};

export const setDateTime = (payload) => {
  return {
    type: RESERVATION_SET_DATE_TIME,
    payload,
  };
};

export const setStep = (payload) => {
  return {
    type: RESERVATION_SET_STEP,
    payload,
  };
};
