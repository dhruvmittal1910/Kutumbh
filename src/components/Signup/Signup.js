import React, { useState } from "react";
import { Button, Form, Grid, Header } from "semantic-ui-react";
import "./Signup.scss";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Password from "../common/Password";
import Logo from "../common/Logo";
// import HttpService from "../../services/HttpService";

const SignupForm = (props) => {
  const [values, setValues] = useState({
    email: props.email || '',
    password: '',
    confirmPassword: '',
    phone: ''
  });
  const emailLabel = React.createRef();
  const passwordLabel = React.createRef();
  const confPasswordLabel = React.createRef();

  const handleSignup = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { email, password, phone } = values;
      try{
        //const response = await HttpService.post('/signup', { email, password, phone });
        // if (response.status === 200) {
        //   props.history.push('/');
        // }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const validateForm = () => {
    const { email, password, confirmPassword } = values;
    return email && password && /\S+@\S+\.\S+/.test(email) && password === confirmPassword;
  };

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });  
  };

  const handleBack = () => {
    props.history.push('/');
  };

  const handleEmailFocus = e =>
    (emailLabel.current.innerText = "Enter your Email address");

  const handleEmailBlur = e => (emailLabel.current.innerText = "");

  const handlePasswordFocus = e =>
    (passwordLabel.current.innerText = "Enter Password");

  const handlePasswordBlur = e => (passwordLabel.current.innerText = "");

  const handleConfPasswordFocus = e =>
    (confPasswordLabel.current.innerText = "Confirm Password");

  const handleConfPasswordBlur = e => (confPasswordLabel.current.innerText = "");

    return (
      <div className="container">
      <Grid className="left-col">          
          <Grid.Column>
            <Logo />
            <Grid
              textAlign="center"
              style={{ marginTop: "6rem" }}
              verticalAlign="middle"
              className="padit"
            >
              <Grid.Column style={{ maxWidth: 350 }}>
                <Header as="h3" color="grey" textAlign="left">
                  ENTER YOUR DETAILS
                </Header>

              
                <Form size="large">
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Email"
                    variant="outlined"
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}
                    fullWidth
                    value={values.email}
                    placeholder="alumni@gmail.com"
                    name="email"
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                    autoComplete="off"
                  />
                  <p ref={emailLabel} className="label"></p>
                  <div className="password">
                    <Password
                      onBlur={handlePasswordBlur}
                      onFocus={handlePasswordFocus}
                      value={values.password}
                      name="password"
                      onChange={handleChange}
                    />
                    <p ref={passwordLabel} className="label"></p>
                    <Password
                      onBlur={handleConfPasswordBlur}
                      onFocus={handleConfPasswordFocus}
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <p ref={confPasswordLabel} className="label"></p>

                  <Form.Input
                    fluid
                    placeholder="Phone number"
                    className="contact"
                    value={values.phone}
                    name="phone"
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                    autoComplete="off"
                  />
                  <div className="submit-div flex end">
                    <Button
                      fluid
                      size="large"
                      className="white"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button color="green" fluid size="large" onClick={handleSignup}>
                      NEXT
                    </Button>
                  </div>
                </Form>
              </Grid.Column>
            </Grid>
            </Grid.Column>
          </Grid>
          <Grid className="right-col">
          <Grid.Column>
            <div className="imagesection"></div>
          </Grid.Column>          
      </Grid>
      </div>
    ); 
}

export default withRouter(SignupForm);