import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
    text-align: center;
    font-weight: bold;

    a {
        cursor: pointer;
    }
`


const CreateProfile = () => {



    return (
        <StyledForm>
            <h3>Complete Your Profile</h3>
            <form>
                {/* username and password will be autofilled via state*/}
                <label> Username: <br/>
                    <input name='username' type='text' disabled = 'true'/> <br/>
                </label>
                <br/>
                <label> Password: <br/>
                    <input name='password' type='password' disabled='true'/> <br/>
                </label>
                <br/>                
                <a>Profile Pic upload</a> <br/>
                <br/>
                <label> Bio: <br/>
                    <textarea type='text' name = 'bio' rows ='20' cols='80' style={{resize: 'none'}}/>
                </label>
                <br/>
                <button>Submit</button>
            </form>
        </StyledForm>
    )
}

export default CreateProfile;