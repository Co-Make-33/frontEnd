import React, {useEffect, useContext} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import {UserContext} from '../contexts/UserContext';


const MyProfile = () => {
    const {userInfo} = useContext(UserContext);
    const id = userInfo.subject
    console.log(id)

    useEffect(() => {
      axiosWithAuth()
        .get(`/api/users/info/${id}`)
        .then( res => {
            console.log(res.data)
        })
        .catch( err => {
            console.log(err.message)
        })
    }, [])


    return(
        <h1>Hello</h1>
    )
}

export default MyProfile;