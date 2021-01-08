import React, {useEffect, useContext, useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import {UserContext} from '../contexts/UserContext';
import {ProfileIssuesContext} from '../contexts/ProfileIssuesContext';
// import Loader from 'react-loader-spinner';
import styled, {createGlobalStyle} from 'styled-components';

const UserPage = createGlobalStyle`
* {
     color: white; 
}
body {
    background-color: #242943;
}
`

const StyledProfile = styled.div `
    display: flex;
    justify-content: space-around;
    border-top: 2px solid black;

    h2{
        margin-left: 40%;
    }
    
`
const StyledIssue = styled.div `
    border-radius:10px;
    margin:10%;
    padding:20%;
    width:290%;
    box-shadow:0px 0px 3px 0px black;
    padding-top:2%;
`
const StyledUserInfo = styled.div `
    margin-left: -70%;
    padding-right: 5%;
    margin-top: 2%;
    border-right: 2px solid black;
    border-width: 100%;
`
const StyledList = styled.div`
    flex-direction: column;
    width: 10%;
    margin-right: 45%;
    margin-top: 10%;

`


const MyProfile = () => {
    const [crrntUserInfo, setCrrntUserInfo] = useState({})
    const {userIssues, setUserIssues} = useContext(ProfileIssuesContext)
    const {userInfo} = useContext(UserContext);
    const id = userInfo.subject
    const [newIssue, setNewIssue] = useState()

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/users/info/${id}`)
            .then( res => {
                setCrrntUserInfo(res.data)
            })
            .catch( err => {
                console.log(err.message)
            })
    }, [])
  
    useEffect (() => {
        axiosWithAuth()
            .get('/api/issues')
            .then(res => {
                setUserIssues(res.data)
                return res.data.length > 3 ? setNewIssue(true) : setNewIssue(false)
            })
            .catch( err => {
                console.log(err)
            })
    },[newIssue])


    // if (newIssue == undefined){
    //     return <Loader type="Puff" color="#204963" height="60" width="60" />
    // }
    
    return(
        <StyledProfile>
            <h2>My Issues</h2>
            <StyledUserInfo>
                <h3>{crrntUserInfo.username}</h3>
                <h4>{crrntUserInfo.email}</h4>
            </StyledUserInfo>
            <StyledList>
            {newIssue ?
                userIssues.filter(user => user.username.includes(`${crrntUserInfo.username}`)).map( issues => {
                    return( 
                        <StyledIssue key = {issues.id}>
                            <div>
                            <h5>{issues.title}</h5>
                            <p>{issues.description}</p> 
                            <p>{issues.date_created}</p>  
                            <p>{issues.resolved_status} </p> 
                            <button onClick={(e) => {
                                 e.preventDefault()
                                 axiosWithAuth()
                                     .delete(`/api/issues/${issues.id}`)
                                     .then( () => {
                                         setNewIssue()
                                     })
                                     .catch( err => {
                                         console.log(err)
                                     })
                            }}>Delete</button>
                            <button>Edit</button>
                            </div>
                        </StyledIssue>
                )}) : <p>No Issues</p>
            } 
            </StyledList>
        </StyledProfile>
    )


}

export default MyProfile;