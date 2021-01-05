import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const LoginPage = createGlobalStyle`
* {
    /* color: white; */
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
`
const LabelStyle = styled.form`
    margin:1%;
`
const LoginTxtDiv = styled.div`
    width:40%;
    display: flex;
    justify-content: flex-end;
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


const initialFormValues = {
    credentials: {
        username:'',
        password:''
    }
};

const initialFormErrors = {
    username:'',
    email:'',
}

const Login = () => {
    const [formData, setFormData] = useState(initialFormValues)
    const {push} = useHistory()

    const handleChange = (e) => {
        setFormData({
            credentials: {...formData.credentials, [e.target.name]: e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(' https://co-make-33.herokuapp.com/api/login', formData.credentials)
            .then( res => {
                sessionStorage.setItem('token', res.data.payload)
                push('/issueslist')
            })
            .catch( err => {
                console.log(err.message)
            })
    }

    return (
<>
    <LoginPage />
        <div className='loginWrapper'>
        <LoginTxtDiv className='login-text'>
            <H3style>Login</H3style>
        </LoginTxtDiv>

        <FormStyle onSubmit={handleSubmit}>
            <LabelStyle>Username<br/>
                <input
                value={formData.credentials.username}
                onChange={handleChange}
                name='username'
                type='text'
                />
            </LabelStyle>

            <LabelStyle>Password<br/>
                <input
                value={formData.credentials.password}
                onChange={handleChange}
                name='password'
                type='password'
                />
            </LabelStyle>
            
            <div className='login-button'>
                <ButtonStyle>Login</ButtonStyle>
            </div>
        </FormStyle>
    </div>
    
</>
    )
}

export default Login