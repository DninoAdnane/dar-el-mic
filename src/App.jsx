import React, { Suspense } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { IntlProvider } from "react-intl";
import AppLocale from "./lang";
// import ColorSwitcher from './components/common/ColorSwitcher';
// import { NotificationContainer } from './components/common/react-notifications';
import {
  isMultiColorActive,
  adminRoot,
  UserRole,
} from "./constants/defaultValues";
import { getDirection } from "./helpers/Utils";
import { ProtectedRoute, LogingRoute } from "./helpers/authHelper";

const ViewHome = React.lazy(() =>
  import(/* webpackChunkName: "views" */ "./views/home")
);
const ViewApp = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./views/app")
);
const ViewUser = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ "./views/user")
);
const ViewError = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ "./views/error")
);
const ViewUnauthorized = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ "./views/unauthorized")
);

class App extends React.Component {
  constructor(props) {
    super(props);
    const direction = getDirection();
    if (direction.isRtl) {
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
    } else {
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
    }
  }

  render() {
    const { locale } = this.props;
    const currentAppLocale = AppLocale[locale];

    return (
      <div className="h-100">
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <>
            {/* <NotificationContainer /> */}
            {/* {isMultiColorActive && <ColorSwitcher />} */}
            <Suspense fallback={<div className="loading" />}>
              <Router>
                <Switch>
                  {/* <ProtectedRoute
                    path={adminRoot}
                    component={ViewApp}
                    roles={[UserRole.Admin, UserRole.User]}
                  /> */}
                  <Route
                    path={adminRoot}
                    render={(props) => <ViewApp {...props} />}
                  />
                  <LogingRoute path="/user" component={ViewUser} />
                  <Route
                    path="/error"
                    exact
                    render={(props) => <ViewError {...props} />}
                  />
                  <Route
                    path="/unauthorized"
                    exact
                    render={(props) => <ViewUnauthorized {...props} />}
                  />
                  <Route
                    path="/dar-el-mic"
                    exact
                    render={(props) => <ViewHome {...props} />}
                  />
                  {/*
                  <Redirect exact from="/" to={adminRoot} />
                  */}
                  <Redirect to="/error" />
                </Switch>
              </Router>
            </Suspense>
          </>
        </IntlProvider>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, settings }) => {
  const { currentUser } = authUser;
  const { locale } = settings;
  return { currentUser, locale };
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
