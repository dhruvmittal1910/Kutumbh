import React,{useState,useEffect} from "react";
import { Button, Header, Grid } from "semantic-ui-react";
import "./confirmSignup.scss";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../common/Logo";
import Lottie from 'react-lottie'
import * as loading from './loading-app.json'


const defaultOptions = {
  loop: false,
  autoplay: true, 
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};



const ConfirmSignup = function (props) {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex">
        <Grid className="left-col">          
          <Grid.Column>
            <Logo />
          </Grid.Column>
        </Grid>
        <Grid className="right-col">
          <Grid.Column>              
          </Grid.Column>          
        </Grid>                
      </div>
      <div className="error-container">
        <Lottie options={defaultOptions} height={450} width={450}/>
        <Header className="error-page-header" as="h3">
          {t('confirm-signup-message')}
          <>
          <br></br>
          </>
          {t('confirm-email-message')}
        </Header>
        <Button class="revert-button" color="green" size="large" onClick={() => props.history.push('/')}>
          GO TO DASHBOARD
        </Button>
      </div>
    </>
  );  
}

export default withRouter(ConfirmSignup);
