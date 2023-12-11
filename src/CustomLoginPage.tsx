// LoginPage.js
import CustomForgotPassword from 'CustomForgotPassword';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import eventTracker from 'lib/eventTracker';
import { useEffect, useRef } from 'react';
import { Login, LoginForm } from 'react-admin';
import { useNavigate } from 'react-router-dom';

interface ISignInScreenProps {}
const SignInScreen: React.FC<ISignInScreenProps> = ({}) => {
  const navigate = useNavigate();
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (elementRef.current) {
      // Initialize the FirebaseUI Widget using Firebase.
      const ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start(elementRef.current, {
        signInFlow: 'popup',
        callbacks: {
          signInSuccessWithAuthResult(authResult, _redirectUrl) {
            // console.log({ authResult });
            // console.log({ redirectUrl });
            navigate('/'); // Redirect to the home page or any other route
            return false;
          },
        },
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
      });
    }
  }, [navigate]);
  return <div ref={elementRef}></div>;
};

const CustomLoginForm = (props: any) => {
  return (
    <div>
      <div style={{ fontFamily: 'monospace', marginLeft: '15px' }}>
        <p>Username: test@example.com</p>
        <p>Password: password</p>
      </div>
      <LoginForm {...props} />
      <SignInScreen />
      <CustomForgotPassword {...props} />
    </div>
  );
};

const CustomLoginPage = (props: any) => {
  useEffect(() => {
    eventTracker.loginPageVisited();
  }, []);

  return (
    <Login {...props}>
      <CustomLoginForm {...props} />
    </Login>
  );
};

export default CustomLoginPage;
