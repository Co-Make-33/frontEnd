import React, {useEffect, useContext, useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import {UserContext} from '../contexts/UserContext';
import {ProfileIssuesContext} from '../contexts/ProfileIssuesContext';


const MyProfile = () => {
    const[crrntUserInfo, setCrrntUserInfo] = useState({})
    const {userIssues, setUserIssues} = useContext(ProfileIssuesContext)
    const {userInfo} = useContext(UserContext);
    const id = userInfo.subject
    console.log(id)

    useEffect(() => {
      axiosWithAuth()
        .get(`/api/users/info/${id}`)
        .then( res => {
            console.log(res.data)
            setCrrntUserInfo(res.data)
        })
        .catch( err => {
            console.log(err.message)
        })
    }, [id])

    useEffect (() => {
        axiosWithAuth()
            .get('/api/users/issues')
            .then(res => {
                console.log(res.data)
                setUserIssues(res.data)
            })
            .catch( err => {
                console.log(err)
            })
    }, [])

    const handleDelete = (e) => {
        e.preventDefault()
        axiosWithAuth()
            .delete(`api/issues/${userIssues.id}`)
            .then( res => {
                console.log(res.data)
                setUserIssues({})
            })
            .catch( err => {
                console.log(err)
            })
    }


    return(
        <div>
            <h3>{crrntUserInfo.username}</h3>
            <h4>{crrntUserInfo.email}</h4>
            { userIssues ? 
                <div>
                    <h2>My Issues</h2>
                    <h5>{userIssues.title}</h5>
                    <p>{userIssues.description} <br/> {userIssues.date_created} <br/> {userIssues.resolved_status} </p> 
                    <button onClick={handleDelete}>Delete</button>
                </div> : <p>No Issues</p>}
        </div>
    )

}

export default MyProfile;


// useEffect (() => {
//     axiosWithAuth()
//         .get('/api/users/issues')
//         .then(res => {
//             console.log(res.data)
//             setUserIssues(...userIssues, res.data)
//         })
//         .catch( err => {
//             console.log(err)
//         })
// }, [])






// return(
//     <div>
//         <h3>{crrntUserInfo.username}</h3>
//         <h4>{crrntUserInfo.email}</h4>
       
//         {userIssues.map(item => {
//             return(
//             <div>
//              <h2>My Issues</h2>
//              <h5>{item.title}</h5>
//              <p>{item.description} <br/> {item.date_created} <br/> {item.resolved_status} </p>
//             </div>
//              ) 
//         }) }
        
//     </div>
// )