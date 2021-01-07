import React from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components'
import { useState, useEffect } from 'react'

const DevelopersPage = createGlobalStyle`
* {
    color: white;
};
body {
    background-color: #242943
};
`
const H1Style = styled.h1`
    font-size: 2em;
    border-bottom: 2px solid white;
    margin: 4%;
    padding: 4px;
    letter-spacing: 2px;
    text-align: center;
`
const DeveloperDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly; 

    p {
        letter-spacing: 1.5px;
    }
`
const DeveloperName = styled.div`
    display:flex;
    margin: 1%;
    font-size: 1.7em;
    width:32%;
    
`
const ImageStyle = styled.img`
    border-radius: 50%;
    max-width:90%;
`

const team = [
    {name: 'April Ashby', gitID:'aprilissy'},
    {name: 'Juan Ruiz', gitID: 'ruizaj13'},
    {name: 'Emily Ryan', gitID: 'emilyr027'},
    {name: 'Peter Lofland', gitID: 'Plofland'},
    {name: 'Oscar Figueroa', gitID: 'OscFig'},
]

const Developers = () => {

    const [ developers, setDevelopers ] = useState(team)

    // useEffect(() => {
    //     axios.get('https://rickandmortyapi.com/api/character')
    //     .then(resolve => {
    //       // console.log(resolve.data.results,'Resolve')
    //       setDevelopers(resolve.data.results)
    //     })
    //     .catch(err => {
    //       console.log('axios failed in Login')
    //     })
    //   }, [])

    useEffect(() => {
        const developerInfo = async function(){
            const members = [...developers]
            for( let i = 0; i < developers.length; i++){
                const {data} = await axios.get(`https://api.github.com/users/${developers[i].gitID}`)
                members[i].image = data.avatar_url
                members[i].url = data.html_url
            }
            setDevelopers(members);
        }
        developerInfo()
    }, [])
    
    return (
        <div className='developer-wrapper'>
            <DevelopersPage/>
            <div className='h1-div'>
                <H1Style>Developers</H1Style>
            </div>
            <DeveloperDiv className='developers-div'>
                {developers.map(developer => {
                    return (
                    <DeveloperName className='DevName-img'>
                        <p>{developer.name}</p>
                        <ImageStyle src={developer.image} alt=''/>
                    </DeveloperName>)
                })}
            </DeveloperDiv>
        </div>
    )
}

export default Developers