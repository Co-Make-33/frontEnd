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

const Heading = styled.div`
  text-align: center;
`;

const GithubCards = styled.div`
  display: flex;
  flex-direction: column;
`;

const SingleCard = styled.div`
  display: flex;
  flex-direction: row;
`;

const Avatar = styled.img`
  width: 25%;
  /* border-radius: 50%; */
`;

const ProfileInfo = styled.div`
  width: 75%;
  h2 {
    font-size: 1.4rem;
  }
`;

const UserInfo = styled.div`
  font-size: 0.75rem;
`;

//array of github usernames to be plugged into the axios call loop
//!Why is this not
// const teamMembers = [
//   'aprilissy',
//   'ruizaj13',
//   'oscfig',
//   'Plofland',
//   'emilyr027'
// ];

const teamMembers = [
  { name: 'April Ashby', login: 'aprilissy' },
  { name: 'Emily Ryan', login: 'emilyr027' },
  { name: 'Juan Ruiz', login: 'ruizaj13' },
  { name: 'Peter Lofland', login: 'plofland' },
  { name: 'Oscar  Figueroa', login: 'oscfig' }
];

function MeetTheTeam() {
  //the state that will hold all the info from each teamMember loop iteration
  //once it is full of each team member's data, it is to be used in a loop in the return statement to create each team member card
  const [team, setTeam] = useState(teamMembers);

  useEffect(() => {
    const devInfo = async () => {
      const developers = [...team];
      //condense this for loop down to a for(i in team)
      for (let i = 0; i < team.length; i++) {
        const { data } = await axios.get(
          `https://api.github.com/users/${team[i]}`
        );
        developers[i].image = data.avatar_url;
        developers[i].url = data.html_url;
        developers[i].location = data.location;
        developers[i].bio = data.bio;
        developers[i].location = data.location;
        developers[i].name = data.name;
        developers[i].login = data.login;

        // developers[i].followers = data.followers;
        // developers[i].following = data.following;
      }
      setTeam(developers);
    };
    devInfo();
  }, []);

  //once the teamState has been set with the data from each teamMember, use a loop in here to create each profile card
  return (
    <>
      <MeetTheTeamGlobal />
      <Heading>
        <h2>Meet The Team</h2>
      </Heading>
      <GithubCards>
        {team.map((dev, index) => {
          return (
            <SingleCard>
              <Avatar src={dev.image} alt="gitHub avatar" />
              <ProfileInfo>
                <h2>{dev.name}</h2>
                <UserInfo>
                  <p>Bio: {dev.bio}</p>
                  <p>Username: {dev.login}</p>
                  <p>Location: {dev.location}</p>
                  {/* <p>Followers: number</p>
                  <p>Following: number</p> */}
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
