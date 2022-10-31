/** @jsxImportSource @emotion/react */
// import { jsx } from '@emotion/react';
import React, { useReducer } from 'react';
import { Header } from './components/Header';
import { BasePageLayout } from './components/layouts/BasePageLayout';
import { rootInitialState } from './state/rootInitialState';
import { rootReducer } from './state/rootReducer';
import { defaultDispatch } from './utils/defaultDispatch';

import './App.css'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import { createTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import AuthProvider, { AuthIsSignedIn, AuthIsNotSignedIn } from './contexts/authContext'

import SignIn from './routes/auth/signIn'
import SignUp from './routes/auth/signUp'
import VerifyCode from './routes/auth/verify'
import RequestCode from './routes/auth/requestCode'
import ForgotPassword from './routes/auth/forgotPassword'
import ChangePassword from './routes/auth/changePassword'
import Landing from './routes/landing'
import Home from './routes/home'

export const StateContext = React.createContext(rootInitialState);
export const DispatchContext = React.createContext(defaultDispatch);

const RollerApp = () => {
  const [state, dispatch] = useReducer(rootReducer, rootInitialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <Header />
        <BasePageLayout />
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

let lightTheme = createTheme({
  palette: {
    type: 'light',
  },
})
lightTheme = responsiveFontSizes(lightTheme)

const SignInRoute: React.FunctionComponent = () => (
  <Router>
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/verify" component={VerifyCode} />
      <Route path="/requestcode" component={RequestCode} />
      <Route path="/forgotpassword" component={ForgotPassword} />
      <Route path="/" component={Landing} />
    </Switch>
  </Router>
)

const MainRoute: React.FunctionComponent = () => (
  <Router>
    <Switch>
      <Route path="/roller" component={RollerApp} />
      <Route path="/changepassword" component={ChangePassword} />
      <Route path="/home" component={Home} />
    </Switch>
  </Router>
)

const App: React.FunctionComponent = () => (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <AuthProvider>
      <AuthIsSignedIn>
        <MainRoute />
      </AuthIsSignedIn>
      <AuthIsNotSignedIn>
        <SignInRoute />
      </AuthIsNotSignedIn>
    </AuthProvider>
  </ThemeProvider>
)

export default App
