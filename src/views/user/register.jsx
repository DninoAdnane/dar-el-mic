import React, { useState, useEffect } from 'react';
import {
  Row,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '@/redux/actions';

import IntlMessages from '@/helpers/IntlMessages';
import { Colxx } from '@/components/common/CustomBootstrap';
import { adminRoot } from '@/constants/defaultValues';
import { regiser_user_call } from "@/call_helpers";


const Register = ({ history, registerUserAction, error, }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      if (error) {
        alert(error);
        // NotificationManager.warning(error, "Login Error", 3000, null, null, "");
      }
    }, [error]);

  const onUserRegister = async () => {
    if (loading) return;
    setLoading(true);
    if (email !== "" && password !== "") {
      // registerUserAction({ email, fullname, password }, history);
      const response = await regiser_user_call(email, password);
      if (response.error) {
        alert(response.error);
        setLoading(false);
        return;
      }
      alert("Please confirm your account !!");
    }
    setLoading(false);
  };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="white mb-0" style={{fontSize: "16px"}}>
              Please use this form to register. <br />
              If you are a member, please{' '}
              <NavLink to="/user/login" className="white">
                <a style={{fontWeight: 600, fontSize: "18px", textDecoration: "underline"}}>login</a>
              </NavLink>
              .
            </p>
          </div>
          <div className="form-side">
            <NavLink to="/" className="white">
              <span className="logo-single" />
            </NavLink>
            <CardTitle className="mb-4">
              <IntlMessages id="user.register" />
            </CardTitle>
            <Form>
              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="user.email" />
                </Label>
                <Input type="email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
              </FormGroup>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="user.password" defaultValue={password} />
                </Label>
                <Input type="password" name='password' onChange={(e) => setPassword(e.target.value)} />
              </FormGroup>

              <div className="d-flex justify-content-end align-items-center">
                <Button
                  color="primary"
                  className={`btn-shadow btn-multiple-state ${
                    loading ? "show-spinner" : ""
                  }`}
                  size="lg"
                  onClick={() => onUserRegister()}
                >
                 <span className="spinner d-inline-block">
                    <span className="bounce1" />
                    <span className="bounce2" />
                    <span className="bounce3" />
                  </span>
                  <span className="label">
                    <IntlMessages id="user.register-button" />
                  </span>
                </Button>
              </div>
            </Form>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};
const mapStateToProps = ({authUser}) => {
  const { error } = authUser;
  return { error };
};

export default connect(null, {})(Register);
