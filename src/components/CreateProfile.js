import React, {useState} from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialFormState = {
    description:'',
    picture: ''
}

const StyledForm = styled.div`
    text-align: center;
    font-weight: bold;

    a {
        cursor: pointer;
    }

    input {
       margin-left: 1%; 

    }
`

const CreateProfile = () => {
    const [profileData, setProfileData] = useState(initialFormState)

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth
            .put('api/users/:id', profileData)
    }

    const handleChange = (e) => {
        setProfileData({...profileData, [e.target.name]: e.target.value})
        console.log(profileData)
    }

    return (
        <StyledForm>
            <h3>Complete Your Profile</h3>
            <form onSubmit={handleSubmit}>
                {/* username and password will be autofilled via state*/}
                <label> Username: 
                    <input name='username' type='text' disabled = 'true'/> <br/>
                </label>
                <br/>
                <label> Password: 
                    <input name='password' type='password' disabled='true'/> <br/>
                </label>
                <br/>
                <label> Profile Photo:                
                    <input onChange={handleChange} type='file' name='picture' value={profileData.picture}/> <br/>
                </label> 
                <br/>
                <label> Bio: <br/>
                    <textarea onChange={handleChange} type='text' name = 'description' value={profileData.description} rows ='10' cols='80' style={{resize: 'none'}}/>
                </label>
                <br/>
                <button>Submit</button>
            </form>
        </StyledForm>
    )
}

export default CreateProfile;