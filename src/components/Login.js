import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContext';
import styled, { createGlobalStyle } from 'styled-components';
import LoginSchema from '../Validation/LoginSchema';
import * as yup from 'yup';

const LoginPage = createGlobalStyle`
* {
     color: white; 
};
body {
    background-color: #242943
};
`
const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3%;
`
const LabelStyle = styled.form`
    margin:1%;
`
const LoginTxtDiv = styled.div`
    width:90%;
    text-align: center;
`
const H3style = styled.div`
    font-size: 2em;
    border-bottom: 2px solid white;
    margin: 4%;
    padding: 4px;
    letter-spacing: 2px;
`
const ButtonStyle = styled.button`
    background-color: #242943;
    padding: 6px 20px;
    letter-spacing: 2px;
        &:hover {
            color: #6fc3df;
            border: 1px solid #6fc3df;
            cursor: pointer;
        }
`
const InputStyle = styled.input`
    color: black;
    display: block;
    box-sizing:border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 4%;
    font-size:14px;
    margin: 5px;
`

const initialFormValues = {
    credentials: {
        username:'',
        password:''
    }
};

const initialFormErrors = {
    username:'',
    password:'',
};
const initialBttnState = true;

const Login = () => {
    const {setAuthorized} = useContext(AuthContext);
    const [formData, setFormData] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [bttnDisable, setBttnDisable] = useState(initialBttnState);
    const {push} = useHistory()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            credentials: {...formData.credentials, [e.target.name]: e.target.value}
        })
        errorMessage(name, value)
    }

    const errorMessage = (name, value) => {
        yup.reach(LoginSchema, name).validate(value)
            .then(() => {
                setFormErrors({...formErrors, [name]: ''})
            })
            .catch((error) => {
                setFormErrors({...formErrors, [name]: error.errors[0]})
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(' https://co-make-33.herokuapp.com/api/login', formData.credentials)
            .then( res => {
                sessionStorage.setItem('token', res.data.token)
                sessionStorage.setItem('authState', true)
                setAuthorized(sessionStorage.getItem('authState'))
                push('/issues')
            })
            .catch( err => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        LoginSchema.isValid(formData)
          .then((valid) => {
            setBttnDisable(!valid);
        });
      }, [formData]);

    return (
<>
    <LoginPage />
        <div className='loginWrapper'>
        <LoginTxtDiv className='login-text'>
            <H3style>Login</H3style>
        </LoginTxtDiv>

        <FormStyle className='inputWrapper' onSubmit={handleSubmit}>
            <LabelStyle>Username<br/>
                <InputStyle
                value={formData.credentials.username}
                onChange={handleChange}
                name='username'
                type='text'
                />
            </LabelStyle>

            <LabelStyle>Password<br/>
                <InputStyle
                value={formData.credentials.password}
                onChange={handleChange}
                name='password'
                type='password'
                />
            </LabelStyle>
            
            <div className='login-button'>
                <ButtonStyle disabled={bttnDisable}>Login</ButtonStyle>
            </div>

            <div className='errors'>
                <p>{formErrors.email}</p>
                <p>{formErrors.username}</p>
            </div>
        </FormStyle>
    </div>
    
</>
    )
}

export default Login