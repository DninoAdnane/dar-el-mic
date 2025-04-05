import { reservation } from "@/constants/defaultValues";
const INIT_STATE = {
  ...reservation,
  step: 1,
};

import {
  RESERVATION_SET_DECOR,
  RESERVATION_SET_PACKAGE,
  RESERVATION_SET_SERVICE,
  RESERVATION_REMOVE_SERVICE,
  RESERVATION_SET_DATE_TIME,
  RESERVATION_SET_STEP,
} from "@/redux/contants";

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case RESERVATION_SET_DECOR:
      return { ...state, decor: action.payload };

    case RESERVATION_SET_PACKAGE:
      return { ...state, packagee: action.payload };

    case RESERVATION_SET_SERVICE:
      let { services } = state;
      const { public_id, quantity } = action.payload;
      const index = services.findIndex((srv) => srv.public_id === public_id);
      if (index >= 0) services[index].quantity = quantity;
      else services = [...services, { public_id, quantity }];
      return { ...state, services: [...services] };

    case RESERVATION_REMOVE_SERVICE:
      const { services: currentServices } = state;
      const filtredServices = currentServices.filter(
        (srv) => srv.public_id !== action.payload
      );
      return { ...state, services: filtredServices };

    case RESERVATION_SET_DATE_TIME:
      return { ...state, dateTime: action.payload };

    case RESERVATION_SET_STEP:
      return { ...state, step: action.payload };

    default:
      return { ...state };
  }
};
