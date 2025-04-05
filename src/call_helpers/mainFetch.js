import { getCurrentUser, setCurrentUser } from "@/helpers/Utils";
import {
  USER_ACOUNT_REFRESH_TOKEN,
  USER_ACCOUNT_TOKEN,
} from "@/call_helpers/constant_url";
import { configureStore } from "@/redux/store";
import { logoutUser } from "@/redux/actions";

export default class MainFetch {
  constructor(
    call_uri,
    body = null,
    method,
    isSecure = false,
    history = null,
    actionState = null
  ) {
    this.call_uri = call_uri;
    this.isSecure = isSecure;
    this.body = body;
    this.method = method;
    this.history = history;
    this.store = configureStore();
    this.actionState = actionState;
  }

  simpleHeader() {
    const header = new Headers({ "Content-type": "application/json" });
    return header;
  }

  access_token() {
    const { access_token } = getCurrentUser();
    return access_token;
  }

  refresh_token() {
    const { refresh_token } = getCurrentUser();
    return refresh_token;
  }

  secureHeader() {
    let header = this.simpleHeader();
    const access_token = this.access_token();
    if (access_token) header.append("Authorization", `Bearer ${access_token}`);
    return header;
  }

  header() {
    return this.isSecure ? this.secureHeader() : this.simpleHeader();
  }

  methodBody() {
    return this.body != null ? JSON.stringify(this.body) : null;
  }

  get fetchCall() {
    return (async () => {
      this.actionState && this.actionState(true);
      try {
        const response = await fetch(this.call_uri, {
          method: this.method,
          body: this.methodBody(),
          headers: this.header(),
        });
        const status = response.status;
        if (!response.ok) {
          this.actionState && this.actionState(false);
          throw {
            json: status < 500 ? await response.json() : {},
            status: response.status,
            statusText: response.statusText,
          };
        }
        const data = await response.json();
        this.actionState && this.actionState(false);
        return { response: data, status: status };
      } catch (error) {
        const { status } = error;
        if (status == 401) {
          const { json: data } = error;
          if (this.call_uri == USER_ACCOUNT_TOKEN) return { error: data };
          if (this.call_uri == USER_ACOUNT_REFRESH_TOKEN) {
            return { error: data };
          }
          const detail = data.detail;
          if (detail) {
            //refresh token and redo the call
            const resp = await new MainFetch(
              USER_ACOUNT_REFRESH_TOKEN,
              { refresh: this.refresh_token() },
              "POST",
              this.history
            ).fetchCall;
            if (resp.error) {
              this.store.dispatch(logoutUser(this.history));
              return;
            }
            const data = resp.response;
            const token = data.access;
            const item = {
              ...getCurrentUser(),
              access_token: token,
            };
            setCurrentUser(item);
            return await new MainFetch(
              this.call_uri,
              this.body,
              this.method,
              this.isSecure,
              this.history
            ).fetchCall;
          }
        }
        if (status >= 500) {
          const errorResponse = {
            detail: "Something went wrong !!",
          };
          return { error: errorResponse };
        }
        const { json: data } = error;
        return { error: data };
      }
    })();
  }
}

// MainFetch.store = configureStore();
