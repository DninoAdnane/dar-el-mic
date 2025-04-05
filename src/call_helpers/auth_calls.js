import {
  USER_ACCOUNT_TOKEN,
  ACCOUT_USER,
  REGISTER_ACCOUNT_USER,
} from "call_helpers/constant_url";

export const login_access_token = async (email, password) => {
  try {
    const response = await fetch(USER_ACCOUNT_TOKEN, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        // email: email,
        username: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.detail);
    }
    return { response: data };
  } catch (error) {
    const data = error.message;
    return { error: data };
  }
};

export const login_user_call = async (access_token) => {
  try {
    const response = await fetch(ACCOUT_USER, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(
        "An error has occured while trying to fetch the current user !!"
      );
    }
    return { response: data };
  } catch (error) {
    const data = error.message;
    return { error: data };
  }
};

export const regiser_user_call = async (email, password) => {
  try {
    const response = await fetch(REGISTER_ACCOUNT_USER, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      return { error: data.error };
    }
    return { response: data };
  } catch (error) {
    const data = error.message;
    return { error: data };
  }
};
