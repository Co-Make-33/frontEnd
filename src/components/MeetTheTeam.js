import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const styledTeam = styled.div`
  display: flex;
`;

function MeetTheTeam() {
  const teamMembers = [
    'aprilissy',
    'ruizaj13',
    'oscfig',
    'Plofland',
    'emilyr027'
  ];

  //   const [teamState, setTeamState] = useState([]);

  //instead of looping, just use the axios call to set the state
  teamMembers.forEach((eachMember) => {
    axios
      .get(`https://api.github.com/users/${eachMember}`)
      .then((result) => {
        console.log(result);
        // setTeamState(result);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  //use the loop in here to loop over the state once it is set by the axios call to create each profile card
  return (
    <styledTeam>
      <div className="githubCards">
        <img
          src="https://avatars2.githubusercontent.com/u/11523076?v=4"
          alt="gitHub avatar"
        ></img>
        <div className="profileInfo">
          <h2>April</h2>
          <div className="userInfo">
            <p>Bio: placeholder</p>
            <p>Username: placeholder</p>
            <p>Followers: number</p>
            <p>Following: number</p>
            <a href="https://github.com/aprilissy">GitHub Profile</a>
          </div>
        </div>
        {/* <img src="https://avatars2.githubusercontent.com/u/11523076?v=4" alt="gitHub avatar" />
      <h2>FluffyBunnyToes</h2> */}
      </div>
    </styledTeam>
  );
}

export default MeetTheTeam;
