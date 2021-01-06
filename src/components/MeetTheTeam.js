import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';

const MeetTheTeamGlobal = createGlobalStyle`
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

const GithubCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SingleCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 45%;
  margin: 3% 0;
  border-radius: 10px;
  box-shadow: 
    /* top */ rgba(255, 255, 255, 0.15) 0px -6px 10px,
    /* right */ rgba(255, 255, 255, 0.15) 6px 0px 10px,
    /* bottom */ rgba(255, 255, 255, 0.15) 0px 6px 10px,
    /* left */ rgba(255, 255, 255, 0.15) -6px 0px 10px;
  border: 2px solid mintcream;
  /* box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color]; */

  @media (max-width: 800px) {
    width: 75%;
    justify-content: space-evenly;
  }
`;

const Avatar = styled.img`
  width: 33%;
  margin: 2%;
  border-radius: 50%;
`;

const ProfileInfo = styled.div`
  width: 75%;
  margin: 2%;
  h2 {
    font-size: 1.4rem;
    margin-top: 0;
  }
`;

const UserInfo = styled.div`
  font-size: 0.75rem;
  line-height: 0.5rem;
`;

const teamMembers = [
  { name: 'April Ashby', login: 'aprilissy' },
  { name: 'Emily Ryan', login: 'emilyr027' },
  { name: 'Juan Ruiz', login: 'ruizaj13' },
  { name: 'Peter Lofland', login: 'plofland' },
  { name: 'Oscar  Figueroa', login: 'oscfig' }
];

function MeetTheTeam() {
  const [team, setTeam] = useState(teamMembers);

  useEffect(() => {
    const devInfo = async () => {
      const developers = [...team];
      //TODO:condense this for loop down to a for(i in team), will it work?
      for (let i = 0; i < team.length; i++) {
        const { data } = await axios.get(
          `https://api.github.com/users/${team[i].login}`
        );
        developers[i].image = data.avatar_url;
        developers[i].bio = data.bio;
        developers[i].location = data.location;
        developers[i].url = data.html_url;
      }
      setTeam(developers);
    };
    devInfo();
  }, []);

  return (
    <>
      <MeetTheTeamGlobal />
      <Heading>Meet The Team</Heading>
      <GithubCards>
        {team.map((dev) => {
          return (
            <SingleCard>
              <Avatar src={dev.image} alt="gitHub avatar" />
              <ProfileInfo>
                <h2>{dev.name}</h2>
                <UserInfo>
                  <p>Bio: {dev.bio}</p>
                  <p>Username: {dev.login}</p>
                  <p>Location: {dev.location}</p>
                  <a href={dev.url}>GitHub Profile</a>
                </UserInfo>
              </ProfileInfo>
            </SingleCard>
          );
        })}
      </GithubCards>
    </>
  );
}

export default MeetTheTeam;

// ___👻CODING GRAVE YARD👻___
//loop over the teamMembers array, use the axios call to set the state by adding the data object to the teamState array
//   teamMembers.forEach((eachMember) => {
//     axios
//       .get(`https://api.github.com/users/${eachMember}`)
//       .then((result) => {
//         // console.log(result);
//         setTeamState([...teamState, result.data]);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });

//   console.log(teamState);

//array of github usernames to be plugged into the axios call loop
//!Why is this not able to work for an axios call but an array of objects does?
// const teamMembers = [
//   'aprilissy',
//   'ruizaj13',
//   'oscfig',
//   'Plofland',
//   'emilyr027'
// ];
