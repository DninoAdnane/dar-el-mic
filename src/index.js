/* eslint-disable global-require */
import "./assets/css/vendor/bootstrap.min.css";
import "./assets/css/vendor/bootstrap.rtl.only.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap 4 JS (includes Popper.js)
import "jquery"; // Import jQuery
import "popper.js"; // Import Popper.js
import "react-circular-progressbar/dist/styles.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-image-lightbox/style.css";
import "./assets/css/index.css";
import {
  isMultiColorActive,
  defaultColor,
  isDarkSwitchActive,
} from "./constants/defaultValues";
import "./AppRenderer";
// import { getCurrentColor, setCurrentColor } from './helpers/Utils';

const color = defaultColor;
// setCurrentColor(color);

const render = async () => {
  await import(`./assets/css/sass/themes/gogo.${color}.scss`);
};
render();
