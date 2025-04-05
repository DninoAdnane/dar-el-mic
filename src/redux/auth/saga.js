import { all, call, fork, put, takeEvery } from "redux-saga/effects";
// import { auth } from 'helpers/Firebase';
import { adminRoot, currentUser } from "../../constants/defaultValues";
import { setCurrentUser } from "../../helpers/Utils";
import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from "../contants";

import {
  loginUserSuccess,
  loginUserError,
  registerUserSuccess,
  registerUserError,
  forgotPasswordSuccess,
  forgotPasswordError,
  resetPasswordSuccess,
  resetPasswordError,
} from "./actions";
import {
  login_user_call,
  login_access_token,
  regiser_user_call,
} from "@/call_helpers";
import MainFetch from "@/call_helpers/mainFetch";

import { UserRole } from "../../constants/defaultValues";
import { USER_ACCOUNT_TOKEN, ACCOUT_USER } from "call_helpers/constant_url";

////////////////////////LOGIN//////////////////////////
export function* watchLoginUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

const retreiveUserAccessTokens = async (email, password) => {
  const response = await new MainFetch(
    USER_ACCOUNT_TOKEN,
    { username: email, password },
    "POST",
    false,
    null
  ).fetchCall;
  return response;
};

const retreiveCurrentUser = async (access_token) => {
  const response = await new MainFetch(ACCOUT_USER, null, "GET", true, null)
    .fetchCall;
  return response;
};

function* loginWithEmailPassword({ payload }) {
  console.log(payload);
  const { email, password } = payload.user;
  const { history } = payload;
  console.log("YEAAH, I'm here");
  const userTokens = yield call(retreiveUserAccessTokens, email, password);

  if (userTokens.error) {
    yield put(loginUserError(userTokens.error));
    return;
  }
  const { access: access_token, refresh: refresh_token } = userTokens.response;
  const itemTokens = {
    access_token,
    refresh_token,
  };
  setCurrentUser(itemTokens);

  const currentLoginUser = yield call(retreiveCurrentUser);
  if (currentLoginUser.error) {
    yield put(loginUserError(currentLoginUser.error));
    return;
  }

  const item = {
    ...itemTokens,
    ...currentLoginUser.response,
    role: UserRole.User,
  };
  setCurrentUser(item);
  yield put(loginUserSuccess({ ...item }));
  history.push(adminRoot);
}

/////////////////////////REGISTER///////////////////////

export function* watchRegisterUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}

const registerWithEmailPasswordAsync = async (email, password) => {
  const response = await regiser_user_call(email, password);
  return response;
};

function* registerWithEmailPassword({ payload }) {
  const { email, password } = payload.user;
  const { history } = payload;
  try {
    const registerUser = yield call(
      registerWithEmailPasswordAsync,
      email,
      password
    );
    if (!registerUser.error) {
      console.log("YEAAH, YEAAAH");
      yield loginWithEmailPassword({ payload });
      console.log("HAHAHAHAH");
    } else {
      const errorMessage = registerUser.error.message;
      const keyError = Object.keys(errorMessage)[0];
      const error = errorMessage[keyError][0];
      yield put(registerUserError(error));
    }
  } catch (error) {
    yield put(registerUserError(error));
  }
}

//////////////////////////////////////////////////////////

export function* watchLogoutUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(LOGOUT_USER, logout);
}

const logoutAsync = async (history) => {
  return;
  // await auth
  //   .signOut()
  //   .then((user) => user)
  //   .catch((error) => error);
  // history.push(adminRoot);
};

function* logout({ payload }) {
  const { history } = payload;
  setCurrentUser();
  yield call(logoutAsync, history);
}

export function* watchForgotPassword() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

const forgotPasswordAsync = async (email) => {
  // eslint-disable-next-line no-return-await
  return;
  // return await auth
  //   .sendPasswordResetEmail(email)
  //   .then((user) => user)
  //   .catch((error) => error);
};

function* forgotPassword({ payload }) {
  const { email } = payload.forgotUserMail;
  try {
    const forgotPasswordStatus = yield call(forgotPasswordAsync, email);
    if (!forgotPasswordStatus) {
      yield put(forgotPasswordSuccess("success"));
    } else {
      yield put(forgotPasswordError(forgotPasswordStatus.message));
    }
  } catch (error) {
    yield put(forgotPasswordError(error));
  }
}

export function* watchResetPassword() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(RESET_PASSWORD, resetPassword);
}

const resetPasswordAsync = async (resetPasswordCode, newPassword) => {
  // eslint-disable-next-line no-return-await
  return;
  // return await auth
  //   .confirmPasswordReset(resetPasswordCode, newPassword)
  //   .then((user) => user)
  //   .catch((error) => error);
};

function* resetPassword({ payload }) {
  const { newPassword, resetPasswordCode } = payload;
  try {
    const resetPasswordStatus = yield call(
      resetPasswordAsync,
      resetPasswordCode,
      newPassword
    );
    if (!resetPasswordStatus) {
      yield put(resetPasswordSuccess("success"));
    } else {
      yield put(resetPasswordError(resetPasswordStatus.message));
    }
  } catch (error) {
    yield put(resetPasswordError(error));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchRegisterUser),
    fork(watchForgotPassword),
    fork(watchResetPassword),
  ]);
}
