import React, { useEffect } from 'react';
import { Row, Card, CardTitle } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import { Colxx } from 'components/common/CustomBootstrap';
// import IntlMessages from 'helpers/IntlMessages';
// import { adminRoot } from '.constants/defaultValues';

const Unauthorized = () => {
  useEffect(() => {
    document.body.classList.add('background');
    document.body.classList.add('no-footer');

    return () => {
      document.body.classList.remove('background');
      document.body.classList.remove('no-footer');
    };
  }, []);

  return (
    <>
      <div className="fixed-background" />
      <main>
        {/* <div className="container">
          <Row className="h-100">
            <Colxx xxs="12" md="10" className="mx-auto my-auto">
              <Card className="auth-card">
                <div className="position-relative image-side ">
                  <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
                  <p className="white mb-0">Yes, it is indeed!</p>
                </div>
                <div className="form-side">
                  <NavLink to="/" className="white">
                    <span className="logo-single" />
                  </NavLink>
                  <CardTitle className="mb-4">
                    <IntlMessages id="unauthorized.title" />
                  </CardTitle>
                  <p className="mb-0 text-muted text-small mb-0">
                    <IntlMessages id="unauthorized.detail" />
                  </p>
                  <p className="display-1 font-weight-bold mb-5">503</p>
                  <NavLink
                    to={adminRoot}
                    className="btn btn-primary btn-shadow btn-lg"
                  >
                    <IntlMessages id="pages.go-back-home" />
                  </NavLink>
                </div>
              </Card>
            </Colxx>
          </Row>
        </div> */}
      </main>
    </>
  );
};

export default Unauthorized;
