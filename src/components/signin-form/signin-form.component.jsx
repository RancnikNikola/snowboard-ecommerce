import { useState } from "react";
import { useDispatch } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";
import FormInput from "../form-input/form-input.component";
import './signin-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const dispatch = useDispatch();
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const onFormSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password));
            resetFormFields();
        } catch (error) {
           switch(error.code) {
            case 'auth/wrong-password':
                alert('Incorrect password for email');
                break;
            case 'auth/user-not-found':
                alert('No user associated with this email');
                break;
            default:
                console.log(error);
           }
        }


    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    }

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormFields({
            ...formFields,
            [name]: value
        })
    }

    return (
        <div className="signin-container">
            <h1>Sign in</h1>
            <form onSubmit={ onFormSubmit }>

                <FormInput
                    label='Email'
                    required
                    type='email'
                    name="email"
                    onChange={onInputChange}
                    value={email}
                />

                <FormInput
                    label='Password'
                    required
                    type='password'
                    name="password"
                    onChange={onInputChange}
                    value={password}
                />

            <div className="buttons-container">
                <button type="submit">Sign in</button>
                <button onClick={signInWithGoogle} type="button">Google sign in</button>
            </div>
            </form>
        </div>
    );
};

export default SignInForm;