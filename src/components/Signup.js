import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import SignupSchema from '../Validation/SignupSchema';
import * as yup from 'yup';

const SignUpGlobal = createGlobalStyle`
* {
    color:white;
}
body {
    background-color:#242943;
}
`;

const Heading = styled.h2`
  text-align: center;
  border-bottom: 2px solid white;
  width: 90%;
  margin: 2% auto;
  padding: 1% 0;
`;

const StyledSignUp = styled.div`
  display: flex;
  margin: 0 auto;
  width: 60%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 70%;
  margin: 10% auto;
  background-color: #8d82c4;
  border-radius: 5px;
  box-shadow: 
    /* top */ rgba(255, 255, 255, 0.15) 0px -6px 10px,
    /* right */ rgba(255, 255, 255, 0.15) 6px 0px 10px,
    /* bottom */ rgba(255, 255, 255, 0.15) 0px 6px 10px,
    /* left */ rgba(255, 255, 255, 0.15) -6px 0px 10px;
  border: 1px solid mintcream;

  input {
    margin: 4% auto;
    width: 80%;
    color: black;
    border: 1px solid black;
  }

  p {
    color: black;
    margin: 0;
    text-align: center;
    font-size: 0.8rem;
  }
`;

const StyledErrors = styled.div`
  font-size: 0.75rem;
  color: black;
  text-align: center;
  margin-top: 0;
`;

const initialValues = {
  email: '',
  username: '',
  password: ''
};

const initialErrors = {
  email: '',
  username: '',
  password: ''
};

const initialUser = [];

const initialDisabled = true;

function Signup() {
  // const { push } = useHistory(); ?What is this? (found in AfricanMarket)
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [user, setUser] = useState(initialUser); //*AfricanMarket uses something different -> (useHistory())
  const [disabled, setDisabled] = useState(initialDisabled);

  //submit function to keep the page from refreshing (event.preventDefault();) and to pass on the formValues (to the backend) when the state is set by clicking the submit button
  const onSubmit = (event) => {
    console.log('Submit button clicked!');
    event.preventDefault();
    const newUser = {
      email: formValues.email, //Why does this not like trim? (formValues.email.trim()) //!ADD this back in once disabled is working
      username: formValues.username, //Why does this not like trim? (formValues.username.trim())
      password: formValues.password
    };
    //After the form data is valid, it is packaged up into the newUser variable and passed on to the next function. //TODOThen next function should post the data to the backend and then set the state back to it's initial values.
    // postNewUser()
    //-or-
    // can't I just set the state of a user, so that it can be passed on to the backend as a state rather than using another function?
    setUser(newUser);
  };

  //function that runs each time a character is typed into the input and then validates the value of each input with the SignupSchema
  const inputChange = (name, value) => {
    yup
      .reach(SignupSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });
    setFormValues({
      ...formValues,
      [name]: formValues
    });
  };

  //handler to handle changes to input values and pass them up to the inputChange function
  const handleChange = (event) => {
    const { name, value } = event.target;
    inputChange(name, value);
  };

  useEffect(() => {
    SignupSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  //AfricanMarket setDisabled() code
  // useEffect(() => {
  //   let update = true;
  //   SignupSchema.isValid(formValues).then((valid) => {
  //     if (update) {
  //       setDisabled(!valid);
  //     }
  //   });
  //   return () => {
  //     update = false;
  //   };
  // }, [formValues]);

  return (
    <>
      <SignUpGlobal />
      <Heading>Sign Up</Heading>
      <StyledSignUp>
        <StyledForm onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            value={formValues.value}
            placeholder="Email"
            onChange={handleChange}
          ></input>
          <StyledErrors>{formErrors.email}</StyledErrors>
          <input
            type="text"
            name="username"
            value={formValues.value}
            placeholder="Username"
            onChange={handleChange}
          ></input>
          <StyledErrors>{formErrors.username}</StyledErrors>
          <input
            type="password"
            name="password"
            value={formValues.value}
            placeholder="Password"
            onChange={handleChange}
          ></input>
          <StyledErrors>{formErrors.password}</StyledErrors>
          <input type="submit" disabled={disabled}></input>
          {/* <button type="submit" disabled={disabled}>
            Submit
          </button> */}
          <Link to="/Login">
            <p>Already have an account?</p>
          </Link>
        </StyledForm>
      </StyledSignUp>
    </>
  );
}

export default Signup;

//?Ask about how this user information gets passed to the backend
//This is how I have posted user info with an API in the past, does it work kinda like this?
// const postNewUser = (newUser) => {
//   axios
//     .post("https://reqres.in/api/users", newUser)
//     .then((res) => {
//       setUser([res.data, ...user]);
//       setFormValues(initialValues);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// ___👻CODING GRAVEYARD👻___
// const handleChange = (event) => {
//   const { email, username, password } = event.target;
//   inputChange(email, username, password);
// };
