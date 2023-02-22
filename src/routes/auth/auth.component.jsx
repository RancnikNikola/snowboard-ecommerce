
import SignUpForm from "../../components/signup-form/signup-form.component";
import SignInForm from "../../components/signin-form/signin-form.component";

import './auth.styles.scss';

const Auth = () => {

    return (
        <div className="auth-container">
            <SignUpForm />
            <SignInForm />
        </div>
    );
};

export default Auth;