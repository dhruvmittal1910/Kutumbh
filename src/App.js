import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "./style/App.scss";
import LoginForm from "./components/Login/Login";
import SignupForm from "./components/Signup/Signup";
import ConfirmSignup from "./components/ConfirmSignup/confirmSignup";
import Errorpage from "./components/Errorpage/Errorpage";
import { Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#67bc46",
      dark: "#000"
    },
    secondary: {
      main: "#fff"
    }
  },
  typography: {
    useNextVariants: true
  }
});

const App = (props) => {
  const [signupEmail, setSignupEmail] = useState('');  
  
  const updateEmail = email => {
    setSignupEmail(email);
  };
  
  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route path="/" exact>
          <LoginForm updateEmail={updateEmail} />
        </Route>
        <Route path="/signup">
          <SignupForm email={signupEmail} />
        </Route>
        <Route path="/confirmsignup">
          <ConfirmSignup/>
        </Route>
        <Route path="/*">
          <Errorpage />
        </Route>
      </Switch>
    </MuiThemeProvider>
  );  
}

export default App;
