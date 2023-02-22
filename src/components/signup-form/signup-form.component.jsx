import { useState } from "react";
import { useDispatch } from 'react-redux';
import FormInput from "../form-input/form-input.component";
import { signUpStart } from '../../store/user/user.action';
import './signup-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const dispatch = useDispatch();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const onFormSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Password do not match');
            return;
        }

        try {
            dispatch(signUpStart(email, password, displayName));
            resetFormFields();
        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Email already in use!');
            }
            console.log('user creation failed', error);
        }

    }

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormFields({
            ...formFields,
            [name]: value
        })
    }

    return (
        <div className="signup-container">
            <h1>Register</h1>
            <form onSubmit={ onFormSubmit }>
                <FormInput
                    label='Username'
                    required
                    type='text'
                    name="displayName"
                    onChange={onInputChange}
                    value={displayName}
                />

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

                <FormInput
                    label='Confirm Password'
                    required
                    type='password'
                    name="confirmPassword"
                    onChange={onInputChange}
                    value={confirmPassword}
                />
                <button type='submit'>Register</button>
            </form>
        </div>
    );
};

export default SignUpForm;