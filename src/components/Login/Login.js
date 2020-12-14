import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Button, Form, Grid, Header } from "semantic-ui-react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from '@material-ui/core/Checkbox';
import "./Login.scss";
import Password from "../common/Password";
import Logo from "../common/Logo";
// import HttpService from "../../services/HttpService";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const LoginForm = (props) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    signupEmail: '',
    conditionsChecked: false
  });

  const emailLabel = React.createRef();
  const passwordLabel = React.createRef();

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });    
  };

  const handleSignup = () => {
    props.updateEmail(values.signupEmail);
    props.history.push("/signup");
  };

  const handleSubmit = async (event, SigninUser) => {
    event.preventDefault();
    if (validateForm()) {
      const { email, password } = values;
      //modifications for firebase integration 
      //const response = await HttpService.post('/login', { email, password });
      //const url = `${process.env.REACT_APP_REDIRECT_URL}${response.data.accountId}?token=${response.data.token}`;
      //window.location.href = url;
    }
  };

  const validateForm = () => {
    const { email, password } = values;
    return email && password && /\S+@\S+\.\S+/.test(email);
  };

  const handleEmailFocus = e => (emailLabel.current.innerText = "Enter your Email address");

  const handleEmailBlur = e => (emailLabel.current.innerText = "");

  const handlePasswordFocus = e =>
    (passwordLabel.current.innerText = "Enter your Password");

  const handlePasswordBlur = e => (passwordLabel.current.innerText = "");

  
  return (
    <div className="container">
      <Grid className="left-col">          
          <Grid.Column>
            <Logo />
            <Grid
              textAlign="center"
              verticalAlign="middle"
              className="padit"
            >
              <Grid.Column className="formcontainer-second">
                <Header as="h4" className="header-text" textAlign="left">
                  LOGIN TO YOUR ACCOUNT
                </Header>                  
                <Form size="large">
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Email"
                    variant="outlined"
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}
                    fullWidth
                    placeholder="alumin@gmail.com"
                    name="email"
                    value={values.email}
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                    autoComplete="off"
                  />

                  <p ref={emailLabel} className="label"></p>
                  <div className="password">
                    <Password
                      onBlur={handlePasswordBlur}
                      onFocus={handlePasswordFocus}
                      onChange={handleChange}
                    />
                  </div>
                  <p ref={passwordLabel} className="label"></p>
                  <div className="submit-div flex end">
                    <span>Forgot Password?</span>
                    <Button color="green" fluid size="large" onClick={handleSubmit}>
                      LOGIN
                    </Button>
                  </div>
                </Form>
                <div className="m5">
                  <Header as="h4" className="header-text" textAlign="left">
                    NOT A PART YET ? LET'S GET YOU STARTED
                  </Header>                  
                  <Form size="large">                        
                    <TextField
                      id="outlined-multiline-flexible-email"
                      label="Enter Your Email ID"
                      variant="outlined"                          
                      onChange={(e) => handleChange(e.target.name, e.target.value)}
                      fullWidth
                      placeholder="alumni@gmail.com"
                      name="signupEmail"
                      value={values.signupEmail}
                      autoComplete="off"
                    />
                    <div className="checkbox-div">
                      <FormControlLabel
                        control={<GreenCheckbox checked={values.conditionsChecked} onChange={(e) => handleChange(e.target.name, e.target.checked)} name="conditionsChecked" value={values.conditionsChecked}/>}
                        label={`I agree with processing of my personal data in conformity with the Privacy Policy. When clicking on "Get Started", you also agree with the User License Agreement.`}
                      />                          
                    </div>
                    <div className="flex end signup-div">
                      <Button fluid size="large" onClick={handleSignup} disabled={!values.conditionsChecked}>
                        SIGN UP
                      </Button>
                    </div>
                  </Form>                  
                </div>
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

export default withRouter(LoginForm);
