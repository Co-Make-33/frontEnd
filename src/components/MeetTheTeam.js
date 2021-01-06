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
  align-items: center;
  width: 100%;
  border: 2px solid black;
`;

//TODO: make the cards width and spacing reponsive (smaller % and wrapped when big screen, higher % and not wrapped when smaller screen)
const SingleCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
  margin: 3% 0;
  border-radius: 10px;
  box-shadow: rgba(255, 255, 255, 0.15) 0px 15px 15px,
    rgba(255, 255, 255, 0.05) 0px 5px 10px;
  border: 2px solid white;
`;

const Avatar = styled.img`
  width: 33%;
  margin: 2%;
  /* border-radius: 50%; */
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

//array of github usernames to be plugged into the axios call loop
//!Why is this not able to work for an axios call but the next one does?
// const teamMembers = [
//   'aprilissy',
//   'ruizaj13',
//   'oscfig',
//   'Plofland',
//   'emilyr027'
// ];

const teamMembers = [
  { name: 'April Ashby', login: 'aprilissy' },
  //!Should have this after the state is set in line 102 {name: 'April Ashby', login:'aprilissy', image: data.avatar_url, url: data.html_url, bio: data.bio, location: data.location}
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
      //TODO:condense this for loop down to a for(i in team), will it work?
      for (let i = 0; i < team.length; i++) {
        const { data } = await axios.get(
          `https://api.github.com/users/${team[i].login}`
        );
        developers[i].image = data.avatar_url;
        developers[i].url = data.html_url;
        developers[i].location = data.location;
        developers[i].bio = data.bio;
        developers[i].location = data.location;

        // developers[i].name = data.name;
        // developers[i].login = data.login;

        // developers[i].followers = data.followers;
        // developers[i].following = data.following;
      }
      setTeam(developers);
    };
    devInfo();
  }, []);

  //   console.log(team);

  //once the teamState has been set with the data from each teamMember, use a loop in here to create each profile card
  return (
    <>
      <MeetTheTeamGlobal />
      <Heading>
        <h2>Meet The Team</h2>
      </Heading>
      <GithubCards>
        {team.map((dev) => {
          //!Why is this index here if it is never used?
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
